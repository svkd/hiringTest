var products = [
    {
        "_id": "1",
        "quantity": {
            "available": 20,
            "estimated": 0
        },
        "conversion": [
            {
                "from": "4",
                "percent": 40
            }
        ]
    },
    {
        "_id": "2",
        "quantity": {
            "available": 40,
            "estimated": 0
        },
        "conversion": []
    },
    {
        "_id": "3",
        "quantity": {
            "available": 15,
            "estimated": 0
        },
        "conversion": []
    },
    {
        "_id": "4",
        "quantity": {
            "available": 120,
            "estimated": 0
        },
        "conversion": []
    },
    {
        "_id": "5",
        "quantity": {
            "available": 0,
            "estimated": 0
        },
        "conversion": [
            {
                "from": "1",
                "percent": 80
            },
            {
                "from": "3",
                "percent": 98
            }
        ]
    }
]

/*
input : _id

return: if _id present return available quantity else "no product with _id"
*/

const getAvailableQty = (_id) => {

}

/*
input: _id

return: _id present return estimated(calculated) quantity else "no product with _id"

calculating estimated quantity: available qunatity + sum of available quantity multiplied by percent for each product in the conversion array

Example:
For the 1st product, 40 percent of the 4th product can be converted to 1st product. So the estimated value of 1st product is
estimated = 20 (current availability) + 120 (4th product available quantity) * 0.4 (percent)
Hence the estimate becomes 68 units. In this way, you have to update the estimated quantity for every product.

*/

const getEstimatedQty = (_id) => {

}

/*
Loop through products array and print(console.log) estimated quantity, available quantity, _id  for each product element
*/
const getAllQuantity = () => {

}