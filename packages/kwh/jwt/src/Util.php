<?php

namespace Kwh\Jwt;

class Util
{
    /**
     * Encodes a string to Base64 with URL Standards. Returns the encoded string.
     *
     * @param string $toEncode
     * @return string
     */
    public static function base64UrlEncode(string $toEncode): string
    {
        return rtrim(strtr(base64_encode($toEncode), '+/', '-_'), '=');
    }

    /**
     * Decodes a Base64 URL Encoded string.
     *
     * @param string $toDecode
     * @return string
     */
    public static function base64UrlDecode(string $toDecode): string
    {
        return base64_decode($toDecode);
    }
}
