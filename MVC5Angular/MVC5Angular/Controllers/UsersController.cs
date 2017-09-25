using System.Collections.Generic;
using System.Web.Http;
using MVC5Angular.Models;

namespace MVC5Angular.Controllers
{
    /// <summary>
    ///     API controller to manage users
    /// </summary>
    public class UsersController : ApiController
    {
        private readonly List<UserViewModel> usersData = new List<UserViewModel>
        {
            new UserViewModel
            {
                Id = 1,
                FirstName = "FN1",
                LastName = "LN1",
                Gender = Gender.Male,
                Mobile = "9999999991",
                Email = "xx1@xx.com",
                City = "Dallas",
                State = "TX",
                Country = "USA",
                Zip = "75067"
            },
            new UserViewModel
            {
                Id = 2,
                FirstName = "FN2",
                LastName = "LN2",
                Gender = Gender.Female,
                Mobile = "9999999992",
                Email = "xx2@xx.com",
                City = "Dallas",
                State = "TX",
                Country = "USA",
                Zip = "75067"
            },
            new UserViewModel
            {
                Id = 3,
                FirstName = "FN3",
                LastName = "LN3",
                Gender = Gender.Male,
                Mobile = "9999999993",
                Email = "xx3@xx.com",
                City = "Dallas",
                State = "TX",
                Country = "USA",
                Zip = "75067"
            },
            new UserViewModel
            {
                Id = 4,
                FirstName = "FN4",
                LastName = "LN4",
                Gender = Gender.Female,
                Mobile = "9999999994",
                Email = "xx4@xx.com",
                City = "Dallas",
                State = "TX",
                Country = "USA",
                Zip = "75067"
            },
            new UserViewModel
            {
                Id = 5,
                FirstName = "FN5",
                LastName = "LN5",
                Gender = Gender.Male,
                Mobile = "9999999995",
                Email = "xx5@xx.com",
                City = "Dallas",
                State = "TX",
                Country = "USA",
                Zip = "75067"
            }
        };

        public IEnumerable<UserViewModel> Get()
        {
            // Return a static list of users
            return usersData;
        }

        public UserViewModel Put(UserViewModel user)
        {
            //Update the user
            return user;
        }

        public UserViewModel Post(UserViewModel user)
        {
            return null;
        }
    }
}