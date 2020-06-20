var bilangan = 23456789;

var number_string = bilangan.toString(),
    sisa = number_string.length % 3,
    groupNumber = number_string.substr(0, sisa),
    groupNumber = number_string.substr(/\d{3}/g);
 if(ribuan){
 separator = sisa ? '-' : '';
 groupNumber += separator + ribuan.join('-');
 }
 document.write(groupNumber);
