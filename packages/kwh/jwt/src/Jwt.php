<?php

namespace Kwh\Jwt;

class Jwt
{
    private string $privateKey;
    private array $algorithms = [
        "HS256" => "sha256"
    ];

    // TODO: Implement JWT config
    public function __construct(string $privateKey)
    {
        $this->privateKey = $privateKey;
    }

    public function getToken(array $userPayload): string
    {
        $header = $this->generateHeader();
        $payload = $this->getPayloadWithClaims($userPayload);
        $headerBase64 = Util::base64UrlEncode(json_encode($header));
        $payloadBase64 = Util::base64UrlEncode(json_encode($payload));
        $alg = $this->algorithms[$header["alg"]];
        $signatureBase64 = $this->getSignature($headerBase64, $payloadBase64, $alg);
        return implode(".", [$headerBase64, $payloadBase64, $signatureBase64]);
    }

    private function getSignature(string $headerBase64, string $payloadBase64, string $alg): string
    {
        $headerWithPayload = $headerBase64 . "." . $payloadBase64;
        return Util::base64UrlEncode(hash_hmac($alg, $headerWithPayload, $this->privateKey, true));
    }

    /**
     * Adds iat and exp claims to existing payload.
     *
     * @param array $originalPayload
     * @return array
     */
    private function getPayloadWithClaims(array $originalPayload): array
    {
        $payload = $originalPayload;
        $payload["iat"] = time();
        # TODO: Make the date a custom setting
        $payload["exp"] = (time() + (120 * 60));
        return $payload;
    }

    /**
     * Generates a JWT header.
     *
     * @return string[]
     */
    private function generateHeader(): array
    {
        # TODO: Make alg a custom setting
        return [
            "alg" => "HS256",
            "typ" => "JWT"
        ];
    }

    /**
     * Tests if a token has valid data, claims, algorithm, signature, etc...
     *
     * @param string $token
     * @return bool
     */
    public function isTokenValid(string $token): bool
    {
        // Validate size (3 parts)
        $tokenArray = explode('.', $token);
        if (count($tokenArray) !== 3) {
            return false;
        }

        // Validate Header claims
        $header = json_decode(Util::base64UrlDecode($tokenArray[0]), true);
        if (
            !isset($header['typ']) ||
            $header['typ'] !== 'JWT' ||
            !isset($header['alg']) ||
            !isset($this->algorithms[$header['alg']])
        ) {
            return false;
        }

        // Validate signature
        $tokenSignature = $tokenArray[2];
        $alg = $this->algorithms[$header["alg"]];
        $calculatedSignature = $this->getSignature($tokenArray[0], $tokenArray[1], $alg);

        if ($tokenSignature !== $calculatedSignature) {
            return false;
        }

        // Validate if the token has expired
        $payload = json_decode(Util::base64UrlDecode($tokenArray[1]), true);
        if (time() >= $payload['exp']) {
            return false;
        }

        return true;
    }

    /**
     * Parses a token to an array. Token is not checked, do that first.
     *
     * @param string $token
     * @return array
     */
    public static function getParsedToken(string $token): array
    {
        $tokenArray = explode('.', $token);
        return [
            'header' => json_decode(Util::base64UrlDecode($tokenArray[0]), true),
            'payload' => json_decode(Util::base64UrlDecode($tokenArray[1]), true),
            'signature' => $tokenArray[2]
        ];
    }
}
