let phone = prompt("Enter your phone number:");

function formattedPhone(phone) {
  if (phone.length !== 12){
    alert(`Incorrect phone number`);
  } else {
    phone = `${phone.slice(0, 2)} (${phone.slice(2, 5)}) ${phone.slice(5, 8)}-${phone.slice(8, 10)}-${phone.slice(10, 12)}`;
    return phone;
  }
}

console.log(formattedPhone(phone));
alert(`Your number is formatted: ${formattedPhone(phone)}`);
