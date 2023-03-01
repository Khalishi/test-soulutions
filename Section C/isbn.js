function isbn13(isbn) {
    
    // Remove any dashes or spaces in the input
    isbn = isbn.replace(/[-\s]/g, '');
  
    // Check if the input is a valid ISBN-10
    if (/^\d{9}(\d|X)$/.test(isbn)) {
      let sum = 0;
      for (let i = 0; i < 9; i++) {
        sum += parseInt(isbn[i]) * (10 - i);
      }
      let checkDigit = (11 - sum % 11) % 11;
      isbn = '978' + isbn.substring(0, 9) + checkDigit;
    }
  
    // Check if the input is a valid ISBN-13
    if (/^978\d{10}$/.test(isbn)) {
      let sum = 0;
      for (let i = 0; i < 12; i++) {
        sum += parseInt(isbn[i]) * (i % 2 === 0 ? 1 : 3);
      }
      let checkDigit = (10 - sum % 10) % 10;
      if (checkDigit === parseInt(isbn[12])) {
        return "Valid";
      } else {
        return "Invalid";
      }
    } else {
      return "Invalid";
    }
  }