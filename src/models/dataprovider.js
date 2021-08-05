module.exports = () => {
  const model = {};

  model.generator = (property) => {
    let value = '';

    const script = `
          () => {
              try {
                const faker = require('faker');
                return faker.${property}();  
              } catch (error) {
                return error;
              }
          }
      `;

    value = eval(script)();

    if (value instanceof Error) value = 'Requested method not found.';

    return value;
  };

  model.helper = {
    message: 'Select dataprovider options.',
    options:
      'account, accountName, alphaNumeric, amount, arrayElement, avatar, between, bic, bitcoinAddress, boolean, city, cityPrefix, citySuffix, color, commonFileExt, commonFileName, commonFileType, country, countryCode, county, currencyCode, currencyName, currencySymbol, directoryPath, domainName, domainSuffix, domainWord, email, ethereumAddress, exampleEmail, fileExt, fileName, filePath, fileType, findName, firstName, future, hexaDecimal, iban, image, ip, ipv6, jobArea, jobDescriptor, jobTitle, jobType, lastName, latitude, lines, locale, longitude, mac, mask, mimeType, month, number, objectElement, paragraph, paragraphs, password, past, phoneFormats, phoneNumber, phoneNumberFormat, prefix, protocol, recent, secondaryAddress, semver, sentence, sentences, slug, soon, state, stateAbbr, streetAddress, streetName, streetPrefix, streetSuffix, suffix, text, title, transactionType, url, userAgent, userName, uuid, weekday, word, word, words, words, zipCode',
  };

  return model;
};
