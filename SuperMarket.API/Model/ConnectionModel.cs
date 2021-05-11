using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SuperMarket.API.Model
{
    public class Login
    {
        public string username { get; set; }
        public string password { get; set; }

        public override string ToString()
        {
            return username + " password =" + password;
        }
    }
    public class Register
    {[BsonId]
     [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId _id { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string username { get; set; }
        public string password { get; set; }
    }
    public class Response
    {
        public string status { set; get; }
        public string message { set; get; }
        public int data { set; get; }
    }
}