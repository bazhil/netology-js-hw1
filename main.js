'use strict'

//задача 1
var name;
var retailPrice;

//задача 2
name = '«Телепорт бытовой VZHIH-101»';
retailPrice = 10000;

console.log(`В наличии имеется: ${name}`);
console.log(`Стоимость товара ${retailPrice} Q`);

//задача 3
var number = 2;
var discount = 10;
console.log('При покупке более двух едениц товара предоставляется скидка 10%');
console.log('Покупатель хочет приобрести два бытовых телепора, вычисляем счет:');
var bill = number*retailPrice*((100-10)/100);
console.log(`Стоимость двух бытовых телепортов составит ${bill} Q`);
console.log('Спасибо, что выбираете бытовые телепорты отечественного производства!');

//задача 4
var balance = 52334224;
var wholesalePrice = 6500;
var count = Math.ceil(balance / wholesalePrice);
var accountBalance = balance % wholesalePrice;
console.log(`Мы можем закупить ${count} едениц товара, после закупки на счету останется ${accountBalance} Q`);