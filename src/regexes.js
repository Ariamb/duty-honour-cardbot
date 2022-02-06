const overturnRegex = /overturn(\ )*(?<amount>(\d)+(\ )*)+/

const hello = overturnRegex.match('overturn 5 4')