var fs = require('fs');
var csv = require('csv');
var _ = require('lodash');
//
// exports.new = function(client, callback) {
//   fs.readFile('client_info.csv', function(error, data) {
//     csv.parse(data.toString(), { columns: true }, function(error, data) {
//       data.push(client);
//       csv.stringify(data, { header: true }, function(error, data) {
//         fs.writeFile('client_info.csv', data, function(error) {
//           callback();
//         });
//       });
//     });
//   });
// }
// add client
exports.new = function(client, callback) {
  fs.readFile('client_info.csv', function(error, data) {
    csv.parse(data, { columns: true }, function(error, data) {
      data.push(client);
      csv.stringify(data, { header: true }, function(error, data) {
        fs.writeFile('client_info.csv', data, function(error) {
          callback();
        });
      });
    });
  });
};

// add cita
exports.appointment = function(cita, callback) {
  fs.readFile('citas.csv', function(error, data) {
    csv.parse(data, { columns: true }, function(error, data) {
      data.push(client);
      csv.stringify(data, { header: true }, function(error, data) {
        fs.writeFile('citas.csv', data, function(error) {
          callback();
        });
      });
    });
  });
};


// find client
exports.search = function(email, callback) {
  fs.readFile('client_info.csv', function(error, data) {
    csv.parse(data, { columns: true }, function(error, data) {
      var result = _.find(data, {email: email});
      if (result) {
        callback(result);
      } else {
        callback({error: 'No contact found'});
      }

    });
  });
};

//show client
exports.list = function(callback) {
    fs.readFile('client_info.csv', function(error, data) {
      csv.parse(data, { columns: true }, function(error, data) {
        callback(data);
      });
    });
};

// update client
exports.edit = function(updateClient, callback){
  fs.readFile('client_info.csv', function(error, data){
    csv.parse(data, { columns: true }, function(error, data) {
      var foundClient = _.find(data, {email: updateClient.email });
      if (foundClient) {
        var result = _.map(data, function(client){
          if (client.email === updateClient.email){
            return _.merge(foundClient, updateClient);
          }
          return client;
        });
        csv.stringify(data, { header: true }, function(error, data){
          fs.writeFile('client_info.csv', data, function(error) {
          callback({ message: 'Update client' });
        });
      });
    } else {
      callback({ error: 'No client by email' });
      }
    });
  });
};


// delete client
exports.delete = function(email, callback) {
  fs.readFile('client_info.csv', function(error, data) {
    csv.parse(data, { columns: true }, function(error, data) {
      var result = _.reject(data, {email: email});
      var sorted = _.sortBy(result, ['last_name', 'first_name']);
      csv.stringify(sorted, { header: true }, function (error, data) {
        fs.writeFile('client_info', data, function(error){
          callback('Removed');
        });

      });
    });
  });
};
