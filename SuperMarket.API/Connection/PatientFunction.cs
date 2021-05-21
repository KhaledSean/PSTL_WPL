using System;
using System.Web;
using MongoDB.Driver;
using MongoDB.Bson;
using System.Net;
using System.Threading;
using SuperMarket.API.Model;
using System.Collections.Generic;
using System.Text.Json;

namespace SuperMarket.API.PatientFunction
{
    public class PatientFunction
    {
        public static bool InsertionPatient(Patient value)
        {
            Console.WriteLine("Add Patient start");
            var connString = "mongodb://127.0.0.1:27017";
            MongoClient client = new MongoClient(connString);
            var db = client.GetDatabase("dataPSTL");
            var collection = db.GetCollection<Patient>("userPatient");

            var firstFilter = Builders<Patient>.Filter.Eq("idDoctor", value.idDoctor);

            var cursor = collection.Find(firstFilter).ToCursor();
            foreach (var collect in cursor.ToEnumerable())
            {
                if (collect.firstNamePatient.Equals(value.firstNamePatient))
                {
                    if (collect.lastNamePatient.Equals(value.lastNamePatient))
                    {
                        Console.WriteLine(" existe déjà ");
                        return false;
                    }
                }
            }
            collection.InsertOne(value);
            Console.WriteLine(collection.ToString());
            Console.WriteLine("Add Patient finished");
            Console.WriteLine("------------");
            return true;
        }

        public static List<Patient> ShowPatient(Doctor value)
        {
            Console.WriteLine("Show Patient start");
            var connString = "mongodb://127.0.0.1:27017";
            MongoClient client = new MongoClient(connString);
            var db = client.GetDatabase("dataPSTL");
            var collection = db.GetCollection<Patient>("userPatient");

            var firstFilter = Builders<Patient>.Filter.Eq("idDoctor", value.userId);
            var cursor = collection.Find(firstFilter);

            return cursor.ToList();

        }

        public static void DeletePatient(Patient value)
        {
            Console.WriteLine("Show Patient start");
            var connString = "mongodb://127.0.0.1:27017";
            MongoClient client = new MongoClient(connString);
            var db = client.GetDatabase("dataPSTL");
            var collection = db.GetCollection<Patient>("userPatient");

            Console.WriteLine("Delte Patient Start");

            var firstFilter = Builders<Patient>.Filter.Eq("idDoctor", value._id);

            if (firstFilter != null)
            {
                collection.DeleteOne(firstFilter);
                Console.WriteLine(" deleted ");
            }


            // var cursor = collection.Find(firstFilter).ToCursor();
            // foreach (var collect in cursor.ToEnumerable())
            // {
            //     Console.WriteLine();
            // }


            // collection.DeleteOne(firstFilter);
            Console.WriteLine(" nothing to delete");

        }

    }
}