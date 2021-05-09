using System;
using System.Web;
using MongoDB.Driver;
using MongoDB.Bson;
using System.Net;
using System.Threading;
using SuperMarket.API.Model;

namespace SuperMarket.API.Connection
{
    public class Connection
    {

        public static bool Insertion(Register value)
        {
            Console.WriteLine("Register start");
            var connString = "mongodb://127.0.0.1:27017";
            MongoClient client = new MongoClient(connString);
            var db = client.GetDatabase("connecionDB");
            var collection = db.GetCollection<BsonDocument>("user");

            var firstFilter = Builders<BsonDocument>.Filter.Eq("username", value.username);
            var doc = collection.Find(firstFilter).FirstOrDefault();

            Console.WriteLine("doc "+doc is null);

            if (doc is null)
            {
                Console.WriteLine("able to insert ");
                var document = new BsonDocument
                {
                    { "firstname", value.firstname },
                    { "lastname", value.lastname },
                    { "username", value.username },
                    { "password", value.password }
                };
                collection.InsertOne(document);
                Console.WriteLine("Register finished");
                Console.WriteLine("------------");
                return true;
            }

            Console.WriteLine("not able");
            Console.WriteLine("doc " + doc);

            var cursor = collection.Find(new BsonDocument()).ToCursor();
            foreach (var collect in cursor.ToEnumerable())
            {
                Console.WriteLine(collect);
            }


            return false;


        }

        public static Register Log(Login value)
        {

            Console.WriteLine("Login start");
            Console.WriteLine(value.ToString());
            Console.WriteLine("-----------");
            var connString = "mongodb://127.0.0.1:27017";
            MongoClient client = new MongoClient(connString);
            var db = client.GetDatabase("connecionDB");
            var collection = db.GetCollection<Register>("user");

            var firstFilter = Builders<Register>.Filter.Eq("username", value.username);

            var doc = collection.Find(firstFilter).FirstOrDefault();

            Console.WriteLine("doc " + doc.password);
            Console.WriteLine("value " + value.password);

            Console.WriteLine(doc.ToString());


            if (!doc.password.Equals(value.password))
            {
                Console.WriteLine("different ");
                return null;
            }

            return doc;


        }
    }
}