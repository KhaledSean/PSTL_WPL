using System;
using System.Web;
using MongoDB.Driver;
using MongoDB.Bson;
using System.Net;
using System.Threading;
using SuperMarket.API.Model;
using System.Collections.Generic;
using System.Text.Json;

namespace SuperMarket.API.DiseaseFunction
{
    public class DiseaseFunction
    {
        public static bool InsertionDisease(Disease value)
        {
            Console.WriteLine("Add Disease start");
            var connString = "mongodb://127.0.0.1:27017";
            MongoClient client = new MongoClient(connString);
            var db = client.GetDatabase("dataPSTL");
            var collection = db.GetCollection<Disease>("Disease");

            collection.InsertOne(value);
            Console.WriteLine(collection.ToString());
            Console.WriteLine("Add Disease finished");
            Console.WriteLine("------------");
            return true;
        }

        public static List<Disease> ShowDisease(DoctorDisease value)
        {
            Console.WriteLine("Show Disease start");
            var connString = "mongodb://127.0.0.1:27017";
            MongoClient client = new MongoClient(connString);
            var db = client.GetDatabase("dataPSTL");
            var collection = db.GetCollection<Disease>("Disease");

            var firstFilter = Builders<Disease>.Filter.Eq("idDoctor", value.userId);
            var cursor = collection.Find(firstFilter);

            return cursor.ToList();

        }
    }
}