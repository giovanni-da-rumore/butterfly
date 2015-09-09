import Users from '../collections/users';
import Groups from '../collections/groups';

class SyncHelper {

  syncData (callback) {
    let url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/sync';
    return $.ajax({
              type:"GET",
              dataType: 'json',
              beforeSend: function (request)
              {
                  request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
              },
              url: url,
              success: callback,
            })
  }

  getUsers (data) {
    let users = new Users();
    users.add(data.users);
    return users;
  }

  getGroups (data) {
    let groups = new Groups();
    groups.add(data.groups);
    return groups;
  }
}

export default SyncHelper;
