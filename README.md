# Backend APIs 

## Base URL :
https://backend-4ar4xydreq-et.a.run.app/

## API BMI Calculator
The BMI Calculator API is an API to calculate Body Mass Index (BMI) based on the provided height and weight.
### Endpoint
| Method | Endpoint | Description |
|:------:|:--------:|-------------|
|POST|`/api/calculate-bmi`|Calculate BMI based on input data.|
### Request
**Body Parameter**
| Parameter | Endpoint | Description |
|:---------:|:--------:|-------------|
|Height|Number|Height in centimeters.|
|Weight|Number|Weight in kilograms.|
### Response
**Response Body**
| Property | Type | Description |
|:--------:|:----:|-------------|
|Height|Number|Calculated height (in centimeters).|
|Weight|Number|Calculated weight (in kilograms).|
|BMI|Number|Calculated BMI value.|
|Category|String|BMI category based on the calculated value.|

### Example Usage
**Request**\
POST /api/calculate-bmi\
Content-Type: application/json
```JSON
{
  "height": 170,
  "weight": 65
}
```
**Response**\
HTTP/1.1 200 OK\
Content-Type: application/json
```JSON
{
    "height": 170,
    "weight": 65,
    "bmi": 22.49134948096886,
    "category": "Normal weight"
}
```

By using this API, you can calculate BMI based on the provided height and weight, and receive a response containing the calculated BMI value and BMI category.
