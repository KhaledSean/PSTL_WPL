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
        
         public static void Insertion(Register value)  
        {  
            Console.WriteLine("Register start");
            var connString = "mongodb://127.0.0.1:27017";
            MongoClient client = new MongoClient(connString);
            var db = client.GetDatabase ("connecionDB");  
            var collection = db.GetCollection<BsonDocument>("user"); 
            
            var document = new BsonDocument
                {
                    { "firstname", value.firstname },
                    { "lastname", value.lastname },
                    { "username", value.username },
                    { "password", value.password }
                };
            collection.InsertOne(document);  

             var cursor = collection.Find(new BsonDocument()).ToCursor();
                foreach (var collect in cursor.ToEnumerable())
                {
                    Console.WriteLine(collect);   
                }

            Console.WriteLine("Register finished");
            Console.WriteLine("------------");
 
        }

        public static Register Log(Login value){

            Console.WriteLine("Login start");
            Console.WriteLine(value.ToString());
            Console.WriteLine("-----------");
            var connString = "mongodb://127.0.0.1:27017";
            MongoClient client = new MongoClient(connString);
            var db = client.GetDatabase ("connecionDB");  
            var collection = db.GetCollection<Register>("user"); 
            
            var firstFilter = Builders<Register>.Filter.Eq("username", value.username);

            var doc = collection.Find(firstFilter).FirstOrDefault();
            Console.WriteLine(doc.ToString());

            
                return doc;
            

        }
    }
}