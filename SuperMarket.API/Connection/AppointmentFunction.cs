using System;
using System.Web;
using MongoDB.Driver;
using MongoDB.Bson;
using System.Net;
using System.Threading;
using SuperMarket.API.Model;
using System.Collections.Generic;
using System.Text.Json;

namespace SuperMarket.API.AppointmentFunction
{
    public class AppointmentFunction
    {
        public static bool InsertionAppointment(Appointment value)
        {
            Console.WriteLine("Add Appointment start");
            var connString = "mongodb://127.0.0.1:27017";
            MongoClient client = new MongoClient(connString);
            var db = client.GetDatabase("dataPSTL");
            var collection = db.GetCollection<Appointment>("Appointment");

            collection.InsertOne(value);
            Console.WriteLine(collection.ToString());
            Console.WriteLine("Add Appointment finished");
            Console.WriteLine("------------");
            return true;
        }

        public static List<Appointment> ShowAppointment(DoctorAppointment value)
        {
            Console.WriteLine("Show Appointment start");
            var connString = "mongodb://127.0.0.1:27017";
            MongoClient client = new MongoClient(connString);
            var db = client.GetDatabase("dataPSTL");
            var collection = db.GetCollection<Appointment>("Appointment");

            var firstFilter = Builders<Appointment>.Filter.Eq("idDoctor", value.userId);
            var cursor = collection.Find(firstFilter);

            return cursor.ToList();

        }

        

    }
}