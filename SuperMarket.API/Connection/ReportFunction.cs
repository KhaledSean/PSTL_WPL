//if[Report]
using System;
using System.Web;
using MongoDB.Driver;
using MongoDB.Bson;
using System.Net;
using System.Threading;
using SuperMarket.API.Model;
using System.Collections.Generic;
using System.Text.Json;

namespace SuperMarket.API.ReportFunction
{
    public class ReportFunction
    {
        public static bool InsertionReport(Report value)
        {
            Console.WriteLine("Add Report start");
            var connString = "mongodb://127.0.0.1:27017";
            MongoClient client = new MongoClient(connString);
            var db = client.GetDatabase("dataPSTL");
            var collection = db.GetCollection<Report>("Report");

            collection.InsertOne(value);
            Console.WriteLine(collection.ToString());
            Console.WriteLine("Add Report finished");
            Console.WriteLine("------------");
            return true;
        }

        public static List<Report> ShowReport(DoctorReport value)
        {
            Console.WriteLine("Show Report start");
            var connString = "mongodb://127.0.0.1:27017";
            MongoClient client = new MongoClient(connString);
            var db = client.GetDatabase("dataPSTL");
            var collection = db.GetCollection<Report>("Report");

            var firstFilter = Builders<Report>.Filter.Eq("idDoctor", value.userId);
            var cursor = collection.Find(firstFilter);

            return cursor.ToList();

        }
    }
}
//endif[Report]