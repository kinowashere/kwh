# KinoWasHere

## API

**/blog/getRecent**

Get most recent 10 blog posts.

| Parameter | Type | Required | Description                                                   |
|-----------|------|----------|---------------------------------------------------------------|
| pageSize  | Int  | No       | Number of elements per page. Default by server is 10          |
| page      | Int  | No       | Which number of page to look for. Default by server is first. |

| Response Code | Response                                    |
|---------------|---------------------------------------------|
| 200           | Array of Post elements, isLastPage: Boolean |
| 404           | String                                      |


## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
