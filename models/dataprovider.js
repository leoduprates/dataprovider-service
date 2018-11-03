module.exports = function(app) {
  var model = {};
  var faker = require('faker/locale/pt_BR');

  model.generator = function(property) {
    var value;
    switch (property) {
      case "firstName":
        value = faker.name.firstName();
        break;
      case "lastName":
        value = faker.name.lastName();
        break;
      case "fullName":
        value = faker.name.findName();
        break;
      case "jobTitle":
        value = faker.name.jobTitle();
        break;
      case "prefix":
        value = faker.name.prefix();
        break;
      case "suffix":
        value = faker.name.suffix();
        break;
      case "title":
        value = faker.name.title();
        break;
      case "jobDescriptor":
        value = faker.name.jobDescriptor();
        break;
      case "jobArea":
        value = faker.name.jobArea();
        break;
      case "jobType":
        value = faker.name.jobType();
        break;
      case "phoneNumber":
        value = faker.phone.phoneNumber();
        break;
      case "phoneNumberFormat":
        value = faker.phone.phoneNumberFormat();
        break;
      case "phoneFormats":
        value = faker.phone.phoneFormats();
        break;
      case "zipCode":
        value = faker.address.zipCode();
        break;
      case "city":
        value = faker.address.city();
        break;
      case "cityPrefix":
        value = faker.address.cityPrefix();
        break;
      case "citySuffix":
        value = faker.address.citySuffix();
        break;
      case "streetName":
        value = faker.address.streetName();
        break;
      case "streetAddress":
        value = faker.address.streetAddress();
        break;
      case "streetSuffix":
        value = faker.address.streetSuffix();
        break;
      case "streetPrefix":
        value = faker.address.streetPrefix();
        break;
      case "secondaryAddress":
        value = faker.address.secondaryAddress();
        break;
      case "county":
        value = faker.address.county();
        break;
      case "country":
        value = faker.address.country();
        break;
      case "countryCode":
        value = faker.address.countryCode();
        break;
      case "state":
        value = faker.address.state();
        break;
      case "stateAbbr":
        value = faker.address.stateAbbr();
        break;
      case "latitude":
        value = faker.address.latitude();
        break;
      case "longitude":
        value = faker.address.longitude();
        break;
      case "past":
        value = faker.date.past();
        break;
      case "future":
        value = faker.date.future();
        break;
      case "between":
        value = faker.date.between();
        break;
      case "recent":
        value = faker.date.recent();
        break;
      case "month":
        value = faker.date.month();
        break;
      case "weekday":
        value = faker.date.weekday();
        break;
      case "account":
        value = faker.finance.account();
        break;
      case "accountName":
        value = faker.finance.accountName();
        break;
      case "mask":
        value = faker.finance.mask();
        break;
      case "amount":
        value = faker.finance.amount();
        break;
      case "transactionType":
        value = faker.finance.transactionType();
        break;
      case "currencyCode":
        value = faker.finance.currencyCode();
        break;
      case "currencyName":
        value = faker.finance.currencyName();
        break;
      case "currencySymbol":
        value = faker.finance.currencySymbol();
        break;
      case "bitcoinAddress":
        value = faker.finance.bitcoinAddress();
        break;
      case "iban":
        value = faker.finance.iban();
        break;
      case "bic":
        value = faker.finance.bic();
        break;
      case "avatar":
        value = faker.internet.avatar();
        break;
      case "email":
        value = faker.internet.email();
        break;
      case "exampleEmail":
        value = faker.internet.exampleEmail();
        break;
      case "userName":
        value = faker.internet.userName();
        break;
      case "protocol":
        value = faker.internet.protocol();
        break;
      case "url":
        value = faker.internet.url();
        break;
      case "domainName":
        value = faker.internet.domainName();
        break;
      case "domainSuffix":
        value = faker.internet.domainSuffix();
        break;
      case "domainWord":
        value = faker.internet.domainWord();
        break;
      case "ip":
        value = faker.internet.ip();
        break;
      case "ipv6":
        value = faker.internet.ipv6();
        break;
      case "userAgent":
        value = faker.internet.userAgent();
        break;
      case "color":
        value = faker.internet.color();
        break;
      case "mac":
        value = faker.internet.mac();
        break;
      case "password":
        value = faker.internet.password();
        break;
      case "word":
        value = faker.lorem.word();
        break;
      case "words":
        value = faker.lorem.words();
        break;
      case "sentence":
        value = faker.lorem.sentence();
        break;
      case "slug":
        value = faker.lorem.slug();
        break;
      case "sentences":
        value = faker.lorem.sentences();
        break;
      case "paragraph":
        value = faker.lorem.paragraph();
        break;
      case "paragraphs":
        value = faker.lorem.paragraphs();
        break;
      case "text":
        value = faker.lorem.text();
        break;
      case "lines":
        value = faker.lorem.lines();
        break;
      case "number":
        value = faker.random.number();
        break;
      case "arrayElement":
        value = faker.random.arrayElement();
        break;
      case "objectElement":
        value = faker.random.objectElement();
        break;
      case "uuid":
        value = faker.random.uuid();
        break;
      case "boolean":
        value = faker.random.boolean();
        break;
      case "word":
        value = faker.random.word();
        break;
      case "words":
        value = faker.random.words();
        break;
      case "image":
        value = faker.random.image();
        break;
      case "locale":
        value = faker.random.locale();
        break;
      case "alphaNumeric":
        value = faker.random.alphaNumeric();
        break;
      case "fileName":
        value = faker.system.fileName();
        break;
      case "commonFileName":
        value = faker.system.commonFileName();
        break;
      case "mimeType":
        value = faker.system.mimeType();
        break;
      case "commonFileType":
        value = faker.system.commonFileType();
        break;
      case "commonFileExt":
        value = faker.system.commonFileExt();
        break;
      case "fileType":
        value = faker.system.fileType();
        break;
      case "fileExt":
        value = faker.system.fileExt();
        break;
      case "directoryPath":
        value = faker.system.directoryPath();
        break;
      case "filePath":
        value = faker.system.filePath();
        break;
      default:
        value = "Requested operation is not supported.";
    }
    return value;
  }

  model.helper = {  "message" : "Select dataprovider options.",
                    "options" : "account, accountName, alphaNumeric, amount, arrayElement, avatar, between, bic, bitcoinAddress, boolean, city, cityPrefix, citySuffix, color, commonFileExt, commonFileName, commonFileType, country, countryCode, county, currencyCode, currencyName, currencySymbol, directoryPath, domainName, domainSuffix, domainWord, email, ethereumAddress, exampleEmail, fileExt, fileName, filePath, fileType, findName, firstName, future, hexaDecimal, iban, image, ip, ipv6, jobArea, jobDescriptor, jobTitle, jobType, lastName, latitude, lines, locale, longitude, mac, mask, mimeType, month, number, objectElement, paragraph, paragraphs, password, past, phoneFormats, phoneNumber, phoneNumberFormat, prefix, protocol, recent, secondaryAddress, semver, sentence, sentences, slug, soon, state, stateAbbr, streetAddress, streetName, streetPrefix, streetSuffix, suffix, text, title, transactionType, url, userAgent, userName, uuid, weekday, word, word, words, words, zipCode"};

  return model;
}
