//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.21 < 0.7.0;

contract VendingMachine {



    struct Drink {
        string name;
        string size;
        string price;
    }

    Drink[] public drinks;
    mapping(address => bool) public customers;



    function addDrink(
        string memory _name,
        string memory _size,
        string memory _price
    ) public{
        Drink memory newDrink = Drink({
            name: _name,
            size: _size,
            price: _price
        });
        drinks.push(newDrink);
    }

    function getDrinkList(uint256 _index)
        public
        view
        returns (
            string memory name,
            string memory size,
            string memory price
        )
    {
        Drink storage drink = drinks[_index];
        return (drink.name, drink.size, drink.price);
    }


}
