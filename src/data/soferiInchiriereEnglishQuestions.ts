import type { QuestionItem } from "./managerTaxiQuestions";

// Source: drive rental engleza-1.pdf. Correct answers follow the yellow highlights.
// sourceNo is the sequential question number; the PDF has no printed numbering.
// Question 68 has no highlight: answer d matches Romanian question id 68 (answer c).
// Question 69 preserves the PDF highlight (c), despite its apparent content error.
export const soferiInchiriereEnglishQuestions: QuestionItem[] = [
  {
    "id": 1,
    "sourceNo": "001",
    "text": "Passenger transport for rent is:",
    "answers": [
      {
        "key": "a",
        "text": "car rental service, with or without driver"
      },
      {
        "key": "b",
        "text": "public passengers transport service, performed with a car by a driver, employee of the authorized transport operator"
      },
      {
        "key": "c",
        "text": "public transport service for passengers for hire and reward, based on a customer receipt issued by the taximeter device"
      },
      {
        "key": "d",
        "text": "transport service in own account"
      }
    ],
    "correct": "b"
  },
  {
    "id": 2,
    "sourceNo": "002",
    "text": "Passenger transport for rent is carried out by:",
    "answers": [
      {
        "key": "a",
        "text": "providing the client with a car with a driver and a taximeter device"
      },
      {
        "key": "b",
        "text": "providing the client with a car with a driver and specific taxi car markings and equipment"
      },
      {
        "key": "c",
        "text": "providing the client with a car with a driver, based on a contract for the performance of the service"
      },
      {
        "key": "d",
        "text": "providing the client with a car, with or without a driver, on a contract basis"
      }
    ],
    "correct": "c"
  },
  {
    "id": 3,
    "sourceNo": "003",
    "text": "Passenger transport for rent is carried out:",
    "answers": [
      {
        "key": "a",
        "text": "only by paying the fare calculated by the taximeter device"
      },
      {
        "key": "b",
        "text": "with advance payment of the contracted service"
      },
      {
        "key": "c",
        "text": "with advance payment of the service to which is added the payment by the client of the cost of fuel consumed and road taxes"
      },
      {
        "key": "d",
        "text": "with payment at the end of the ride, depending on the number of kilometers traveled and the total parking time"
      }
    ],
    "correct": "b"
  },
  {
    "id": 4,
    "sourceNo": "004",
    "text": "In accordance with the provisions of Law no. 38/2003 on taxi and transport for rent, the authorization for carrying out transport for rent is issued by:",
    "answers": [
      {
        "key": "a",
        "text": "Ministry of Transport and Infrastructure through the Road Transport Directorate"
      },
      {
        "key": "b",
        "text": "National Trade Register Office"
      },
      {
        "key": "c",
        "text": "the authorizing authority within the town hall of the city/village or the town hall of Bucharest within the administrative-territorial area in which the transport operator has ther headquarters or domicile"
      },
      {
        "key": "d",
        "text": "the territorial agency of the Romanian Road Transport Authority – ARR in the administrative-territorial area where the transport operator has the headquarters"
      }
    ],
    "correct": "d"
  },
  {
    "id": 5,
    "sourceNo": "005",
    "text": "Authorization for transport for rent:",
    "answers": [
      {
        "key": "a",
        "text": "allows transport by taxi"
      },
      {
        "key": "b",
        "text": "is issued for a period of 3 years"
      },
      {
        "key": "c",
        "text": "is unique and non-transferable"
      },
      {
        "key": "d",
        "text": "must be on board the vehicle during the rental transport"
      }
    ],
    "correct": "c"
  },
  {
    "id": 6,
    "sourceNo": "006",
    "text": "The transport for rent is carried out:",
    "answers": [
      {
        "key": "a",
        "text": "for hire and reward, based on a customer receipt"
      },
      {
        "key": "b",
        "text": "for hire and reward, based on the indications of the taximeter device"
      },
      {
        "key": "c",
        "text": "for hire and reward, on a contract basis"
      },
      {
        "key": "d",
        "text": "for hire and reward, on a subscription basis"
      }
    ],
    "correct": "c"
  },
  {
    "id": 7,
    "sourceNo": "007",
    "text": "The transport for rent may be done:",
    "answers": [
      {
        "key": "a",
        "text": "by a transport operator authorized to carry out taxi transport"
      },
      {
        "key": "b",
        "text": "by a transport operator authorized to perform the transport service for hire, on a contract basis"
      },
      {
        "key": "c",
        "text": "by a transport operator authorized to provide car rental services, on a contract basis"
      },
      {
        "key": "d",
        "text": "by any natural person who owns or leases a car"
      }
    ],
    "correct": "c"
  },
  {
    "id": 8,
    "sourceNo": "008",
    "text": "The transport for rent is done when:",
    "answers": [
      {
        "key": "a",
        "text": "the authorized transport operator provides the client with a car with a driver, based on an order through the dispatch center"
      },
      {
        "key": "b",
        "text": "the authorized transport operator provides the client with a car with a driver, on a contract basis"
      },
      {
        "key": "c",
        "text": "the authorized transport operator provides the client with a car without a driver, on a contract basis"
      },
      {
        "key": "d",
        "text": "the authorized transport operator provides the customer with a car with or without a driver, based on a customer receipt"
      }
    ],
    "correct": "b"
  },
  {
    "id": 9,
    "sourceNo": "009",
    "text": "The authorization for the carriage of passengers for rent is issued:",
    "answers": [
      {
        "key": "a",
        "text": "for a period of 1 year"
      },
      {
        "key": "b",
        "text": "for a period of 3 years and is valid subject to annual verification"
      },
      {
        "key": "c",
        "text": "for a period of 5 years and is valid subject to annual verification"
      },
      {
        "key": "d",
        "text": "for an indefinite period and is valid subject to endorsement every 5 years"
      }
    ],
    "correct": "d"
  },
  {
    "id": 10,
    "sourceNo": "010",
    "text": "The certified copy of the authorization for the transport for rent, contains:",
    "answers": [
      {
        "key": "a",
        "text": "driver's name"
      },
      {
        "key": "b",
        "text": "name of the authorized transport operator"
      },
      {
        "key": "c",
        "text": "the tariff charged"
      },
      {
        "key": "d",
        "text": "vehicle identification card series"
      }
    ],
    "correct": "b"
  },
  {
    "id": 11,
    "sourceNo": "011",
    "text": "The certified copy of the authorization for the transport for rent, contains:",
    "answers": [
      {
        "key": "a",
        "text": "driver's first and last name"
      },
      {
        "key": "b",
        "text": "series and number of the driver's professional training certificate"
      },
      {
        "key": "c",
        "text": "the registration number of the vehicle for which it is issued"
      },
      {
        "key": "d",
        "text": "the tariff charged"
      }
    ],
    "correct": "c"
  },
  {
    "id": 12,
    "sourceNo": "012",
    "text": "The certified copy of the authorization for the transport for rent:",
    "answers": [
      {
        "key": "a",
        "text": "is certified for conformity with the original by a notary"
      },
      {
        "key": "b",
        "text": "is certified for conformity with the original by the authorized transport operator"
      },
      {
        "key": "c",
        "text": "is unique and can only be transmitted between vehicles of the authorized transport operator"
      },
      {
        "key": "d",
        "text": "is unique and non-transferable from one vehicle to another"
      }
    ],
    "correct": "d"
  },
  {
    "id": 13,
    "sourceNo": "013",
    "text": "The badges that are issued together with the certified copy of the transport authorization must contain the following inscription:",
    "answers": [
      {
        "key": "a",
        "text": "name of the authorized transport operator and the location of authorization"
      },
      {
        "key": "b",
        "text": "registration certificate number"
      },
      {
        "key": "c",
        "text": "the country or countries for which the certified copy of the authorization is valid"
      },
      {
        "key": "d",
        "text": "the registration number of the vehicle for which the certified copy of the authorization was issued"
      }
    ],
    "correct": "d"
  },
  {
    "id": 14,
    "sourceNo": "014",
    "text": "The badges that are issued together with the certified copy of the transport authorization must contain the following inscription:",
    "answers": [
      {
        "key": "a",
        "text": "city/village of authorization"
      },
      {
        "key": "b",
        "text": "the country or countries for which the certified copy of the authorization is valid"
      },
      {
        "key": "c",
        "text": "the registration numbers of the vehicles for which the certified copy is valid"
      },
      {
        "key": "d",
        "text": "the vehicle identification number for which the certified copy is valid"
      }
    ],
    "correct": "a"
  },
  {
    "id": 15,
    "sourceNo": "015",
    "text": "The badges that are issued together with the certified copy of the authorization for the transport for rent, must contain the following inscription:",
    "answers": [
      {
        "key": "a",
        "text": "name of the authorized transport operator"
      },
      {
        "key": "b",
        "text": "the registration numbers of the vehicles for which the certified copy is valid"
      },
      {
        "key": "c",
        "text": "the RENT CAR sign"
      },
      {
        "key": "d",
        "text": "the vehicle identification number for which the certified copy is valid"
      }
    ],
    "correct": "c"
  },
  {
    "id": 16,
    "sourceNo": "016",
    "text": "The badges that are issued together with the certified copy of the authorization for the transport for rent, must contain the following inscription:",
    "answers": [
      {
        "key": "a",
        "text": "name of the authorized transport operator"
      },
      {
        "key": "b",
        "text": "TAXI sign"
      },
      {
        "key": "c",
        "text": "the registration numbers of the vehicles for which the certified copy is valid"
      },
      {
        "key": "d",
        "text": "the validity period of the certified copy of the authorization"
      }
    ],
    "correct": "d"
  },
  {
    "id": 17,
    "sourceNo": "017",
    "text": "A certified copy of the authorization for the transport for rent must be found at:",
    "answers": [
      {
        "key": "a",
        "text": "authorized transport operator's headquarters"
      },
      {
        "key": "b",
        "text": "car parking space"
      },
      {
        "key": "c",
        "text": "on board of the vehicle"
      },
      {
        "key": "d",
        "text": "the person designated to permanently and effectively manage the transport activity"
      }
    ],
    "correct": "c"
  },
  {
    "id": 18,
    "sourceNo": "018",
    "text": "The certified copy of the authorization for the transport for rent is valid only in the presence of:",
    "answers": [
      {
        "key": "a",
        "text": "badges issued together with the certified copy"
      },
      {
        "key": "b",
        "text": "metrological verification certificate of the taximeter device"
      },
      {
        "key": "c",
        "text": "the vehicle approval certificate issued by the RAR"
      },
      {
        "key": "d",
        "text": "vehicle identification card"
      }
    ],
    "correct": "a"
  },
  {
    "id": 19,
    "sourceNo": "019",
    "text": "The certified copy of the authorization for the transport for rent is valid only in the presence of:",
    "answers": [
      {
        "key": "a",
        "text": "metrological verification certificate of the taximeter device"
      },
      {
        "key": "b",
        "text": "the vehicle approval certificate issued by the RAR"
      },
      {
        "key": "c",
        "text": "the vehicle registration certificate with the annex regarding the valid periodic technical inspection"
      },
      {
        "key": "d",
        "text": "vehicle identification card"
      }
    ],
    "correct": "c"
  },
  {
    "id": 20,
    "sourceNo": "020",
    "text": "The certified copy of the authorization for the transport for rent is valid only in the presence of:",
    "answers": [
      {
        "key": "a",
        "text": "dispatch contract, in copy"
      },
      {
        "key": "b",
        "text": "mandatory motor third party liability insurance"
      },
      {
        "key": "c",
        "text": "the metrological verification certificate of the taximeter device, in copy"
      },
      {
        "key": "d",
        "text": "the vehicle approval certificate issued by the RAR"
      }
    ],
    "correct": "b"
  },
  {
    "id": 21,
    "sourceNo": "021",
    "text": "The certified copy of the authorization for the transport for rent is valid only in the presence of:",
    "answers": [
      {
        "key": "a",
        "text": "document for payment of the road network usage fee (rovinieta)"
      },
      {
        "key": "b",
        "text": "driver's identity card"
      },
      {
        "key": "c",
        "text": "driver's professional certificate"
      },
      {
        "key": "d",
        "text": "the vehicle approval certificate issued by the RAR"
      }
    ],
    "correct": "c"
  },
  {
    "id": 22,
    "sourceNo": "022",
    "text": "The certified copy of the authorization for the transport for rent is issued together with:",
    "answers": [
      {
        "key": "a",
        "text": "taxi dispatch authorization"
      },
      {
        "key": "b",
        "text": "the contract for the assignment of management of the execution of taxi transport services"
      },
      {
        "key": "c",
        "text": "two badges valid for one year"
      },
      {
        "key": "d",
        "text": "two badges with the same validity of the certified copy of the authorization"
      }
    ],
    "correct": "d"
  },
  {
    "id": 23,
    "sourceNo": "023",
    "text": "To carry out passenger transport for rent, the vehicle must have:",
    "answers": [
      {
        "key": "a",
        "text": "certified copy of the rental transport authorization"
      },
      {
        "key": "b",
        "text": "copy of the contract with the dispatcher"
      },
      {
        "key": "c",
        "text": "rental transport authorization"
      },
      {
        "key": "d",
        "text": "the vehicle's approval certificate"
      }
    ],
    "correct": "a"
  },
  {
    "id": 24,
    "sourceNo": "024",
    "text": "To carry out passenger transport for rent, the vehicle must have:",
    "answers": [
      {
        "key": "a",
        "text": "metrological verification certificate of the taximeter device"
      },
      {
        "key": "b",
        "text": "the vehicle approval certificate issued by the RAR"
      },
      {
        "key": "c",
        "text": "the vehicle registration certificate with the annex regarding the valid periodic technical inspection"
      },
      {
        "key": "d",
        "text": "vehicle identification card"
      }
    ],
    "correct": "c"
  },
  {
    "id": 25,
    "sourceNo": "025",
    "text": "To carry out passenger transport for rent, the vehicle must have:",
    "answers": [
      {
        "key": "a",
        "text": "dispatch contract, in copy"
      },
      {
        "key": "b",
        "text": "mandatory motor third party liability insurance"
      },
      {
        "key": "c",
        "text": "the metrological verification certificate of the taximeter device, in copy"
      },
      {
        "key": "d",
        "text": "the vehicle approval certificate issued by the RAR"
      }
    ],
    "correct": "b"
  },
  {
    "id": 26,
    "sourceNo": "026",
    "text": "To carry out passenger transport for rent, the vehicle must have:",
    "answers": [
      {
        "key": "a",
        "text": "driver's professional certificate"
      },
      {
        "key": "b",
        "text": "driver's professional record"
      },
      {
        "key": "c",
        "text": "the driver's medical and psychological certificate"
      },
      {
        "key": "d",
        "text": "the vehicle approval certificate issued by the RAR"
      }
    ],
    "correct": "a"
  },
  {
    "id": 27,
    "sourceNo": "027",
    "text": "To carry out passenger transport for rent, the vehicle must have:",
    "answers": [
      {
        "key": "a",
        "text": "insurance of transported passengers and their goods, for the risks that fall under the responsibility of the authorized transport operator"
      },
      {
        "key": "b",
        "text": "insurance to certify the financial capacity of the authorized transport operator"
      },
      {
        "key": "c",
        "text": "list of tariffs applied, approved by the local public administration"
      },
      {
        "key": "d",
        "text": "the driver's driving record"
      }
    ],
    "correct": "a"
  },
  {
    "id": 28,
    "sourceNo": "028",
    "text": "To carry out passenger transport for rent, the vehicle must have:",
    "answers": [
      {
        "key": "a",
        "text": "rental transport authorization"
      },
      {
        "key": "b",
        "text": "taxi authorization, certified copy"
      },
      {
        "key": "c",
        "text": "the contract for the assignment of management of the rental service"
      },
      {
        "key": "d",
        "text": "the fiscal document with a valid special regime regarding the advance payment of the entire contracted transport"
      }
    ],
    "correct": "d"
  },
  {
    "id": 29,
    "sourceNo": "029",
    "text": "To carry out the passenger transport for rent, the vehicle must have:",
    "answers": [
      {
        "key": "a",
        "text": "the contract concluded between the authorized transport operator and the client"
      },
      {
        "key": "b",
        "text": "the contract concluded between the driver and the client"
      },
      {
        "key": "c",
        "text": "the tax certificate of the electronic memory of the taximeter device for the transport value"
      },
      {
        "key": "d",
        "text": "vehicle classification certificate according to Euro pollution standards"
      }
    ],
    "correct": "a"
  },
  {
    "id": 30,
    "sourceNo": "030",
    "text": "In order to carry out passenger transport for rent, the driver must be at least:",
    "answers": [
      {
        "key": "a",
        "text": "18 years old"
      },
      {
        "key": "b",
        "text": "20 years"
      },
      {
        "key": "c",
        "text": "21 years old"
      },
      {
        "key": "d",
        "text": "23 years old"
      }
    ],
    "correct": "c"
  },
  {
    "id": 31,
    "sourceNo": "031",
    "text": "In order to carry out passenger transport for rent, the driver must have a valid category B driving license with at least:",
    "answers": [
      {
        "key": "a",
        "text": "1 year"
      },
      {
        "key": "b",
        "text": "2 years"
      },
      {
        "key": "c",
        "text": "3 years"
      },
      {
        "key": "d",
        "text": "4 years"
      }
    ],
    "correct": "b"
  },
  {
    "id": 32,
    "sourceNo": "032",
    "text": "Drivers who are 25 years old and carry out transport passengers for rent must undergo a medical examination at the following intervals:",
    "answers": [
      {
        "key": "a",
        "text": "1 year"
      },
      {
        "key": "b",
        "text": "2 years"
      },
      {
        "key": "c",
        "text": "3 years"
      },
      {
        "key": "d",
        "text": "4 years"
      }
    ],
    "correct": "a"
  },
  {
    "id": 33,
    "sourceNo": "033",
    "text": "Drivers under the age of 45 who transport passengers for rent must undergo psychological examination at the following intervals:",
    "answers": [
      {
        "key": "a",
        "text": "1 year"
      },
      {
        "key": "b",
        "text": "2 years"
      },
      {
        "key": "c",
        "text": "3 years"
      },
      {
        "key": "d",
        "text": "4 years"
      }
    ],
    "correct": "a"
  },
  {
    "id": 34,
    "sourceNo": "034",
    "text": "The lack of mandatory motor third party liability insurance, during the inspection of the competent authorities, is sanctioned by:",
    "answers": [
      {
        "key": "a",
        "text": "retaining a certified copy of the rental transport authorization"
      },
      {
        "key": "b",
        "text": "retention of license plates"
      },
      {
        "key": "c",
        "text": "withholding the registration certificate"
      },
      {
        "key": "d",
        "text": "withholding the transport authorization for hire"
      }
    ],
    "correct": "a"
  },
  {
    "id": 35,
    "sourceNo": "035",
    "text": "Drivers in the age group over 45 and carrying out passenger transport for rent must undergo a medical examination at the following intervals:",
    "answers": [
      {
        "key": "a",
        "text": "1 year"
      },
      {
        "key": "b",
        "text": "2 years"
      },
      {
        "key": "c",
        "text": "3 years"
      },
      {
        "key": "d",
        "text": "4 years"
      }
    ],
    "correct": "a"
  },
  {
    "id": 36,
    "sourceNo": "036",
    "text": "Drivers between 45 and 65 years old and carrying out passenger transport for rent must undergo psychological examination at the following intervals:",
    "answers": [
      {
        "key": "a",
        "text": "1 year"
      },
      {
        "key": "b",
        "text": "2 years"
      },
      {
        "key": "c",
        "text": "3 years"
      },
      {
        "key": "d",
        "text": "5 years"
      }
    ],
    "correct": "a"
  },
  {
    "id": 37,
    "sourceNo": "037",
    "text": "The lack of a personal insurance policy for the risks that fall under the responsibility of the authorized carrier, during the inspection of the authorized authorities, is sanctioned by:",
    "answers": [
      {
        "key": "a",
        "text": "retaining a certified copy of the rental transport authorization"
      },
      {
        "key": "b",
        "text": "retention of the contract for the assignment of the management of the taxi service"
      },
      {
        "key": "c",
        "text": "retention of the vehicle's identity card"
      },
      {
        "key": "d",
        "text": "withholding the transport authorization for hire"
      }
    ],
    "correct": "a"
  },
  {
    "id": 38,
    "sourceNo": "038",
    "text": "The lack of a valid vehicle registration certificate together with the annex regarding the periodic technical inspection, during the inspection of the authorized authorities, is sanctioned by:",
    "answers": [
      {
        "key": "a",
        "text": "cancellation of the certified copy of the rental transport authorization"
      },
      {
        "key": "b",
        "text": "retaining a certified copy of the rental transport authorization"
      },
      {
        "key": "c",
        "text": "retention of the driver's professional certificate"
      },
      {
        "key": "d",
        "text": "withholding the transport authorization for hire"
      }
    ],
    "correct": "b"
  },
  {
    "id": 39,
    "sourceNo": "039",
    "text": "The lack of a driver's professional certificate, during the inspection of the competent authorities, is sanctioned by:",
    "answers": [
      {
        "key": "a",
        "text": "retaining a certified copy of the rental transport authorization"
      },
      {
        "key": "b",
        "text": "suspension of driving privileges for a period of 30 days"
      },
      {
        "key": "c",
        "text": "suspension of the right to use the vehicle"
      },
      {
        "key": "d",
        "text": "withholding the transport authorization for hire"
      }
    ],
    "correct": "a"
  },
  {
    "id": 40,
    "sourceNo": "040",
    "text": "The use of false documents in carrying out transport service activities is sanctioned by:",
    "answers": [
      {
        "key": "a",
        "text": "cancellation of the driver's professional certificate"
      },
      {
        "key": "b",
        "text": "suspension of the right to use the vehicle by withholding the registration certificate"
      },
      {
        "key": "c",
        "text": "suspension of the transport authorization for a period of 1 – 3 months"
      },
      {
        "key": "d",
        "text": "withdrawal of transport authorization"
      }
    ],
    "correct": "d"
  },
  {
    "id": 41,
    "sourceNo": "041",
    "text": "Repeatedly practicing procedures aimed at tax evasion is sanctioned by:",
    "answers": [
      {
        "key": "a",
        "text": "suspension of the certified copy of the transport authorization for 120 days"
      },
      {
        "key": "b",
        "text": "suspension of the right to use the vehicle by withholding the registration certificate"
      },
      {
        "key": "c",
        "text": "suspension of the transport authorization for a period of 1 – 3 months"
      },
      {
        "key": "d",
        "text": "withdrawal of transport authorization"
      }
    ],
    "correct": "d"
  },
  {
    "id": 42,
    "sourceNo": "042",
    "text": "The expiry of the validity of the periodic technical inspection (ITP) is sanctioned by:",
    "answers": [
      {
        "key": "a",
        "text": "cancellation of the certified copy of the transport authorization"
      },
      {
        "key": "b",
        "text": "suspension of the certified copy of the transport authorization"
      },
      {
        "key": "c",
        "text": "suspension of the transport authorization until the periodic technical inspection is carried out"
      },
      {
        "key": "d",
        "text": "withdrawal of transport authorization"
      }
    ],
    "correct": "b"
  },
  {
    "id": 43,
    "sourceNo": "043",
    "text": "Carrying out transport for rent, without the mandatory payment documents, is sanctioned by:",
    "answers": [
      {
        "key": "a",
        "text": "cancellation of the certified copy of the transport authorization"
      },
      {
        "key": "b",
        "text": "suspension of the certified copy of the transport authorization"
      },
      {
        "key": "c",
        "text": "suspension of transport authorization for 30 days"
      },
      {
        "key": "d",
        "text": "withdrawal of transport authorization"
      }
    ],
    "correct": "b"
  },
  {
    "id": 44,
    "sourceNo": "044",
    "text": "Carrying out transport for rent, without the mandatory payment documents, is sanctioned by:",
    "answers": [
      {
        "key": "a",
        "text": "cancellation of the certified copy of the transport authorization"
      },
      {
        "key": "b",
        "text": "suspension of the certified copy of the transport authorization"
      },
      {
        "key": "c",
        "text": "suspension of transport authorization for 30 days"
      },
      {
        "key": "d",
        "text": "withdrawal of transport authorization"
      }
    ],
    "correct": "b"
  },
  {
    "id": 45,
    "sourceNo": "045",
    "text": "The use of signs or equipment specific fot taxi cars on vehicles that carry out transport of passengers for rent is sanctioned by:",
    "answers": [
      {
        "key": "a",
        "text": "cancellation of the certified copy of the transport authorization"
      },
      {
        "key": "b",
        "text": "suspension of the certified copy of the transport authorization"
      },
      {
        "key": "c",
        "text": "suspension of transport authorization for 30 days"
      },
      {
        "key": "d",
        "text": "withdrawal of transport authorization"
      }
    ],
    "correct": "b"
  },
  {
    "id": 46,
    "sourceNo": "046",
    "text": "Using a car for public transport for rent, without having a certified copy of the transport authorization, is sanctioned with:",
    "answers": [
      {
        "key": "a",
        "text": "fine and suspension of the right to use the car for 3 months"
      },
      {
        "key": "b",
        "text": "fine and suspension of the right to use the car for 6 months"
      },
      {
        "key": "c",
        "text": "fine and suspension of the right to use the car for 60 days"
      },
      {
        "key": "d",
        "text": "warning"
      }
    ],
    "correct": "b"
  },
  {
    "id": 47,
    "sourceNo": "047",
    "text": "Using a car for public transport for rent, with a certified copy of the transport authorization whose validity has expired, is sanctioned with:",
    "answers": [
      {
        "key": "a",
        "text": "fine and suspension of the right to use the car for 3 months"
      },
      {
        "key": "b",
        "text": "fine and suspension of the right to use the car for 6 months"
      },
      {
        "key": "c",
        "text": "fine and suspension of the right to use the car for 60 days"
      },
      {
        "key": "d",
        "text": "fine and suspension of the right to use the car for 90 days"
      }
    ],
    "correct": "b"
  },
  {
    "id": 48,
    "sourceNo": "048",
    "text": "Carrying out passenger transport as a taxi using a certified copy of the passenger transport for rent authorization is sanctioned with:",
    "answers": [
      {
        "key": "a",
        "text": "cancellation of driving license"
      },
      {
        "key": "b",
        "text": "fine and suspension of the right to use the car for 12 months"
      },
      {
        "key": "c",
        "text": "fine and suspension of the right to use the car for 6 months"
      },
      {
        "key": "d",
        "text": "prison"
      }
    ],
    "correct": "c"
  },
  {
    "id": 49,
    "sourceNo": "049",
    "text": "Placing on the body of a vehicle that does not have a valid certified copy of the signs and accessories specific to vehicles authorized to carry out transport for rent is sanctioned with:",
    "answers": [
      {
        "key": "a",
        "text": "fine and suspension of the right to use the vehicle for 3 months"
      },
      {
        "key": "b",
        "text": "fine and suspension of the right to use the vehicle for 45 days"
      },
      {
        "key": "c",
        "text": "fine and suspension of the right to use the vehicle for 6 months"
      },
      {
        "key": "d",
        "text": "fine and suspension of the right to use the vehicle for 60 days"
      }
    ],
    "correct": "c"
  },
  {
    "id": 50,
    "sourceNo": "050",
    "text": "Suspension of the right to use the vehicle is achieved by:",
    "answers": [
      {
        "key": "a",
        "text": "immobilization of the car"
      },
      {
        "key": "b",
        "text": "retention of the registration certificate and license plates"
      },
      {
        "key": "c",
        "text": "withholding the registration certificate"
      },
      {
        "key": "d",
        "text": "withholding the registration certificate and identity card"
      }
    ],
    "correct": "b"
  },
  {
    "id": 51,
    "sourceNo": "051",
    "text": "The suspension of the right to use the vehicle is carried out by withholding the registration certificate and the license plates, by:",
    "answers": [
      {
        "key": "a",
        "text": "ARR"
      },
      {
        "key": "b",
        "text": "public road administrators"
      },
      {
        "key": "c",
        "text": "RAR"
      },
      {
        "key": "d",
        "text": "traffic police"
      }
    ],
    "correct": "d"
  },
  {
    "id": 52,
    "sourceNo": "052",
    "text": "The notified suspension of the right to use the vehicle shall cease, upon request, if:",
    "answers": [
      {
        "key": "a",
        "text": "at least 3 months have passed since the date of the report and proof of payment of the fine is submitted"
      },
      {
        "key": "b",
        "text": "at least 30 days have passed since the date of the report and proof of payment of the fine is submitted"
      },
      {
        "key": "c",
        "text": "at least 6 months have passed since the date of the report and proof of payment of the fine is submitted"
      },
      {
        "key": "d",
        "text": "at least 60 days have passed since the date of the report and proof of payment of the fine is submitted"
      }
    ],
    "correct": "b"
  },
  {
    "id": 53,
    "sourceNo": "053",
    "text": "Cars intended for the transport of passengers for rent are prohibited from being equipped with:",
    "answers": [
      {
        "key": "a",
        "text": "audible warning devices when reversing"
      },
      {
        "key": "b",
        "text": "radio"
      },
      {
        "key": "c",
        "text": "taximeter devices and/or radio transceivers"
      },
      {
        "key": "d",
        "text": "tinted side windows"
      }
    ],
    "correct": "c"
  },
  {
    "id": 54,
    "sourceNo": "054",
    "text": "Indicate which of the following facts constitutes an infringement according to Law no. 38/2003 on taxi and transport for rent:",
    "answers": [
      {
        "key": "a",
        "text": "performing the rental transport service without having a certified copy of the rental transport authorization on board the vehicle"
      },
      {
        "key": "b",
        "text": "performing the rental transport service without the existence of a taxi authorization on board the vehicle"
      },
      {
        "key": "c",
        "text": "performing the rental transport service without the existence of a taximeter device on board the vehicle"
      },
      {
        "key": "d",
        "text": "performing the rental transport service without the rental transport authorization on board the vehicle"
      }
    ],
    "correct": "a"
  },
  {
    "id": 55,
    "sourceNo": "055",
    "text": "After the expiry of a notified period of suspension of the right to use the vehicle, if proof of payment of the fine is not provided, the holder is notified of the extension of the suspension for another:",
    "answers": [
      {
        "key": "a",
        "text": "3 months"
      },
      {
        "key": "b",
        "text": "30 days"
      },
      {
        "key": "c",
        "text": "45 days"
      },
      {
        "key": "d",
        "text": "6 months"
      }
    ],
    "correct": "d"
  },
  {
    "id": 56,
    "sourceNo": "056",
    "text": "The application of a new suspension of the right to use the vehicle within a maximum of 12 months from the end of the last suspension is for a period of:",
    "answers": [
      {
        "key": "a",
        "text": "12 months if proof of payment of the fine is submitted"
      },
      {
        "key": "b",
        "text": "3 months if proof of payment of the fine is submitted"
      },
      {
        "key": "c",
        "text": "6 months if proof of payment of the fine is submitted"
      },
      {
        "key": "d",
        "text": "6 months or 30 days if proof of payment of the fine is submitted"
      }
    ],
    "correct": "c"
  },
  {
    "id": 57,
    "sourceNo": "057",
    "text": "The certificate of professional competence is valid:",
    "answers": [
      {
        "key": "a",
        "text": "in Romania and in countries with which Romania has an agreement concluded in this regard"
      },
      {
        "key": "b",
        "text": "in the geographical area of the authority that issued the certificate"
      },
      {
        "key": "c",
        "text": "on EU territory"
      },
      {
        "key": "d",
        "text": "on the territory of Romania"
      }
    ],
    "correct": "d"
  },
  {
    "id": 58,
    "sourceNo": "058",
    "text": "In order to carry out transport for rent, the driver must:",
    "answers": [
      {
        "key": "a",
        "text": "be at least 20 years old"
      },
      {
        "key": "b",
        "text": "have at least one year of driving experience"
      },
      {
        "key": "c",
        "text": "hold a valid driving license for category B, with at least 3 years of experience"
      },
      {
        "key": "d",
        "text": "to be medically and psychologically fit"
      }
    ],
    "correct": "d"
  },
  {
    "id": 59,
    "sourceNo": "059",
    "text": "The certificate of professional competence is valid:",
    "answers": [
      {
        "key": "a",
        "text": "5 years with annual visa"
      },
      {
        "key": "b",
        "text": "5 years with review for visa every 2 years"
      },
      {
        "key": "c",
        "text": "for an unlimited period without the need for a periodic visa"
      },
      {
        "key": "d",
        "text": "provided that it is covered by the term and the driver proves that he is medically and psychologically fit for the transport of passengers"
      }
    ],
    "correct": "d"
  },
  {
    "id": 60,
    "sourceNo": "060",
    "text": "To take the exam to obtain the certificate of professional competence for transport for rent, the driver must present:",
    "answers": [
      {
        "key": "a",
        "text": "certified copy of the taxi authorization"
      },
      {
        "key": "b",
        "text": "driving license category B"
      },
      {
        "key": "c",
        "text": "proof of completion of a professional training course for practicing for-hire transport"
      },
      {
        "key": "d",
        "text": "taxi authorization"
      }
    ],
    "correct": "c"
  },
  {
    "id": 61,
    "sourceNo": "061",
    "text": "Vehicles used to carry out transport for rent must be owned by the authorized carrier:",
    "answers": [
      {
        "key": "a",
        "text": "by title (deed) of property"
      },
      {
        "key": "b",
        "text": "by title (deed) of property or leasing contract"
      },
      {
        "key": "c",
        "text": "by title (deed) of property or leasing contract or commodate contract"
      },
      {
        "key": "d",
        "text": "by title (deed) of property or with a rental contract"
      }
    ],
    "correct": "b"
  },
  {
    "id": 62,
    "sourceNo": "062",
    "text": "The absence of the badges issued together with the certified copy of the authorization to carry out transport for rent during the control carried out by the competent authorities, means:",
    "answers": [
      {
        "key": "a",
        "text": "criminal fine"
      },
      {
        "key": "b",
        "text": "indefinite retention of taxi authorization"
      },
      {
        "key": "c",
        "text": "suspension of taxi authorization for a period of 1 to 3 months"
      },
      {
        "key": "d",
        "text": "withholding the certified copy of the transport authorization until proof of the existence of the badges is provided"
      }
    ],
    "correct": "d"
  },
  {
    "id": 63,
    "sourceNo": "063",
    "text": "Which of the following sanctions applied to the employee is correct:",
    "answers": [
      {
        "key": "a",
        "text": "disciplinary termination of the individual labour contract"
      },
      {
        "key": "b",
        "text": "suspension of the individual labour contract for a period of 3 – 6 months"
      },
      {
        "key": "c",
        "text": "unpaid for a period of 1 - 3 months"
      },
      {
        "key": "d",
        "text": "verbal warning"
      }
    ],
    "correct": "a"
  },
  {
    "id": 64,
    "sourceNo": "064",
    "text": "The gear shift allows:",
    "answers": [
      {
        "key": "a",
        "text": "modification of traction force depending on the variation of forward resistance"
      },
      {
        "key": "b",
        "text": "operating the engine at a speed lower than idle speed"
      },
      {
        "key": "c",
        "text": "progressive coupling of the engine with the transmission"
      },
      {
        "key": "d",
        "text": "reversing the vehicle by reversing the direction of rotation of the engine"
      }
    ],
    "correct": "a"
  },
  {
    "id": 65,
    "sourceNo": "065",
    "text": "Which of the listed subassemblies are component elements of the vehicle transmission?",
    "answers": [
      {
        "key": "a",
        "text": "braking system"
      },
      {
        "key": "b",
        "text": "clutch"
      },
      {
        "key": "c",
        "text": "steering mechanism"
      },
      {
        "key": "d",
        "text": "the suspension"
      }
    ],
    "correct": "b"
  },
  {
    "id": 66,
    "sourceNo": "066",
    "text": "Which of the listed subassemblies are component elements of the vehicle transmission?",
    "answers": [
      {
        "key": "a",
        "text": "braking system"
      },
      {
        "key": "b",
        "text": "gearbox"
      },
      {
        "key": "c",
        "text": "steering mechanism"
      },
      {
        "key": "d",
        "text": "the suspension"
      }
    ],
    "correct": "b"
  },
  {
    "id": 67,
    "sourceNo": "067",
    "text": "Which of the listed subassemblies are component elements of the vehicle transmission?",
    "answers": [
      {
        "key": "a",
        "text": "braking system"
      },
      {
        "key": "b",
        "text": "differential"
      },
      {
        "key": "c",
        "text": "steering mechanism"
      },
      {
        "key": "d",
        "text": "the suspension"
      }
    ],
    "correct": "b"
  },
  {
    "id": 68,
    "sourceNo": "068",
    "text": "What is the role of transmission?",
    "answers": [
      {
        "key": "a",
        "text": "converts the chemical energy of fuels into mechanical energy"
      },
      {
        "key": "b",
        "text": "develops the power necessary to propel vehicles"
      },
      {
        "key": "c",
        "text": "ensures the engine is supplied with fuel mixture"
      },
      {
        "key": "d",
        "text": "ensures the transmission of power flow from the engine to the drive wheels"
      }
    ],
    "correct": "d"
  },
  {
    "id": 69,
    "sourceNo": "069",
    "text": "What is the role of transmission?",
    "answers": [
      {
        "key": "a",
        "text": "amplifies/multiplies the engine torque transmitted to the drive wheels"
      },
      {
        "key": "b",
        "text": "converts the chemical energy of fuels into mechanical energy"
      },
      {
        "key": "c",
        "text": "develops the power necessary to propel vehicles"
      },
      {
        "key": "d",
        "text": "ensures the engine is supplied with fuel mixture"
      }
    ],
    "correct": "c"
  },
  {
    "id": 70,
    "sourceNo": "070",
    "text": "Which of the transmission components listed below multiplies the engine torque transmitted to the driving wheels?",
    "answers": [
      {
        "key": "a",
        "text": "cardan transmission"
      },
      {
        "key": "b",
        "text": "clutch"
      },
      {
        "key": "c",
        "text": "gearbox"
      },
      {
        "key": "d",
        "text": "planetary trees"
      }
    ],
    "correct": "c"
  },
  {
    "id": 71,
    "sourceNo": "071",
    "text": "Which of the transmission components listed above allows the flow of power transmitted from the engine to the driving wheels to be interrupted?",
    "answers": [
      {
        "key": "a",
        "text": "cardan transmission"
      },
      {
        "key": "b",
        "text": "clutch"
      },
      {
        "key": "c",
        "text": "differential"
      },
      {
        "key": "d",
        "text": "main transmission"
      }
    ],
    "correct": "b"
  },
  {
    "id": 72,
    "sourceNo": "072",
    "text": "Which of the transmission components listed above allows the flow of power transmitted from the engine to the driving wheels to be interrupted?",
    "answers": [
      {
        "key": "a",
        "text": "differential"
      },
      {
        "key": "b",
        "text": "gearbox"
      },
      {
        "key": "c",
        "text": "main transmission"
      },
      {
        "key": "d",
        "text": "planetary trees"
      }
    ],
    "correct": "b"
  },
  {
    "id": 73,
    "sourceNo": "073",
    "text": "Which of the transmission components listed above protects the transmission from shocks and overloads?",
    "answers": [
      {
        "key": "a",
        "text": "cardan transmission"
      },
      {
        "key": "b",
        "text": "clutch"
      },
      {
        "key": "c",
        "text": "gearbox"
      },
      {
        "key": "d",
        "text": "main transmission"
      }
    ],
    "correct": "b"
  },
  {
    "id": 74,
    "sourceNo": "074",
    "text": "Which of the transmission components listed above allow the wheels of the same drive axle to run at different speeds?",
    "answers": [
      {
        "key": "a",
        "text": "clutch"
      },
      {
        "key": "b",
        "text": "differential"
      },
      {
        "key": "c",
        "text": "gearbox"
      },
      {
        "key": "d",
        "text": "planetary trees"
      }
    ],
    "correct": "b"
  },
  {
    "id": 75,
    "sourceNo": "075",
    "text": "What is the role of the clutch?",
    "answers": [
      {
        "key": "a",
        "text": "allows temporary interruption of power flow transmission"
      },
      {
        "key": "b",
        "text": "allows the drive wheels to run at different speeds"
      },
      {
        "key": "c",
        "text": "amplifies engine torque transmitted to the drive wheels"
      },
      {
        "key": "d",
        "text": "distributes engine torque to the drive wheels"
      }
    ],
    "correct": "a"
  },
  {
    "id": 76,
    "sourceNo": "076",
    "text": "What is the role of the clutch?",
    "answers": [
      {
        "key": "a",
        "text": "allows progressive coupling of the engine with the transmission"
      },
      {
        "key": "b",
        "text": "allows the drive wheels to run at different speeds"
      },
      {
        "key": "c",
        "text": "amplifies engine torque transmitted to the drive wheels"
      },
      {
        "key": "d",
        "text": "distributes engine torque to the drive wheels"
      }
    ],
    "correct": "a"
  },
  {
    "id": 77,
    "sourceNo": "077",
    "text": "What is the role of the clutch?",
    "answers": [
      {
        "key": "a",
        "text": "allows the drive wheels to run at different speeds"
      },
      {
        "key": "b",
        "text": "amplifies engine torque transmitted to the drive wheels"
      },
      {
        "key": "c",
        "text": "distributes engine torque to the drive wheels"
      },
      {
        "key": "d",
        "text": "protects the transmission from shocks and overloads"
      }
    ],
    "correct": "d"
  },
  {
    "id": 78,
    "sourceNo": "078",
    "text": "What is the role of the gearbox?",
    "answers": [
      {
        "key": "a",
        "text": "allows compensation for variations in the relative position of transmission components"
      },
      {
        "key": "b",
        "text": "allows interruption of the transmission of power flow from the engine to the drive wheels"
      },
      {
        "key": "c",
        "text": "distributes engine torque to the drive wheels"
      },
      {
        "key": "d",
        "text": "protects the transmission from shocks and overloads"
      }
    ],
    "correct": "a"
  },
  {
    "id": 79,
    "sourceNo": "079",
    "text": "What is the role of the gearbox?",
    "answers": [
      {
        "key": "a",
        "text": "allows compensation for variations in the relative position of transmission components"
      },
      {
        "key": "b",
        "text": "allows reverse travel without reversing the direction of motor rotation"
      },
      {
        "key": "c",
        "text": "allows the drive wheels to run at different speeds"
      },
      {
        "key": "d",
        "text": "distributes engine torque to the drive wheels"
      }
    ],
    "correct": "c"
  },
  {
    "id": 80,
    "sourceNo": "080",
    "text": "What is the role of the gearbox?",
    "answers": [
      {
        "key": "a",
        "text": "allows changing the transmission ratio of engine torque to the drive wheels"
      },
      {
        "key": "b",
        "text": "allows the drive wheels to run at different speeds"
      },
      {
        "key": "c",
        "text": "distributes engine torque to the drive wheels"
      },
      {
        "key": "d",
        "text": "protects the transmission from shocks and overloads"
      }
    ],
    "correct": "a"
  },
  {
    "id": 81,
    "sourceNo": "081",
    "text": "What is the role of the cardan transmission?",
    "answers": [
      {
        "key": "a",
        "text": "allows compensation for variations in the relative position of transmission components"
      },
      {
        "key": "b",
        "text": "allows the drive wheels to run at different speeds"
      },
      {
        "key": "c",
        "text": "amplifies engine torque transmitted to the drive wheels"
      },
      {
        "key": "d",
        "text": "distributes engine torque to the drive wheels"
      }
    ],
    "correct": "a"
  },
  {
    "id": 82,
    "sourceNo": "082",
    "text": "What is the role of the differential?",
    "answers": [
      {
        "key": "a",
        "text": "allows interruption of power flow transmission"
      },
      {
        "key": "b",
        "text": "allows progressive coupling of the engine with the transmission"
      },
      {
        "key": "c",
        "text": "distributes engine torque to the drive wheels"
      },
      {
        "key": "d",
        "text": "protects the transmission from shocks and overloads"
      }
    ],
    "correct": "c"
  },
  {
    "id": 83,
    "sourceNo": "083",
    "text": "What is the role of the differential?",
    "answers": [
      {
        "key": "a",
        "text": "allows interruption of power flow transmission"
      },
      {
        "key": "b",
        "text": "allows progressive coupling of the engine with the transmission"
      },
      {
        "key": "c",
        "text": "allows the drive wheels to run at different speeds"
      },
      {
        "key": "d",
        "text": "protects the transmission from shocks and overloads"
      }
    ],
    "correct": "c"
  },
  {
    "id": 84,
    "sourceNo": "084",
    "text": "What are the risks of continuously keeping your foot on the clutch pedal?",
    "answers": [
      {
        "key": "a",
        "text": "premature wear of the clutch release bearing"
      },
      {
        "key": "b",
        "text": "service brake overheating"
      },
      {
        "key": "c",
        "text": "the hazard of skidding"
      },
      {
        "key": "d",
        "text": "there are no risks"
      }
    ],
    "correct": "a"
  },
  {
    "id": 85,
    "sourceNo": "085",
    "text": "What are the risks of continuously keeping your foot on the clutch pedal?",
    "answers": [
      {
        "key": "a",
        "text": "clutch overheating"
      },
      {
        "key": "b",
        "text": "differential lock"
      },
      {
        "key": "c",
        "text": "loss of tire-road adhesion"
      },
      {
        "key": "d",
        "text": "service brake overheating"
      }
    ],
    "correct": "a"
  },
  {
    "id": 86,
    "sourceNo": "086",
    "text": "The effectiveness of anti-lock braking systems is greater:",
    "answers": [
      {
        "key": "a",
        "text": "on roads with concrete pavement"
      },
      {
        "key": "b",
        "text": "on roads with high grip"
      },
      {
        "key": "c",
        "text": "on roads with low grip"
      },
      {
        "key": "d",
        "text": "on roads with steep slopes"
      }
    ],
    "correct": "c"
  },
  {
    "id": 87,
    "sourceNo": "087",
    "text": "The ABS system allows:",
    "answers": [
      {
        "key": "a",
        "text": "avoiding wheel locking and increasing braking efficiency"
      },
      {
        "key": "b",
        "text": "differential lock to prevent the wheel with less grip from spinning"
      },
      {
        "key": "c",
        "text": "increasing tire-road adhesion when braking"
      },
      {
        "key": "d",
        "text": "wheel locking in case of emergency braking"
      }
    ],
    "correct": "a"
  },
  {
    "id": 88,
    "sourceNo": "088",
    "text": "ABS anti-lock braking systems intervene on:",
    "answers": [
      {
        "key": "a",
        "text": "differential"
      },
      {
        "key": "b",
        "text": "fuel feed system of the engine"
      },
      {
        "key": "c",
        "text": "service braking system"
      },
      {
        "key": "d",
        "text": "steering systems"
      }
    ],
    "correct": "c"
  },
  {
    "id": 89,
    "sourceNo": "089",
    "text": "If the ABS warning light comes on while driving during sudden braking:",
    "answers": [
      {
        "key": "a",
        "text": "nothing will happen"
      },
      {
        "key": "b",
        "text": "only the wheel where the sensor failed will lock"
      },
      {
        "key": "c",
        "text": "the vehicle will skid"
      },
      {
        "key": "d",
        "text": "the wheels will slip"
      }
    ],
    "correct": "d"
  },
  {
    "id": 90,
    "sourceNo": "090",
    "text": "The ASR system is designed for:",
    "answers": [
      {
        "key": "a",
        "text": "avoiding wheel locking when braking"
      },
      {
        "key": "b",
        "text": "braking the drive wheels by blocking the exhaust manifold"
      },
      {
        "key": "c",
        "text": "ensuring braking on long slopes"
      },
      {
        "key": "d",
        "text": "preventing the tire from breaking grip on the ground when starting from a standstill"
      }
    ],
    "correct": "d"
  },
  {
    "id": 91,
    "sourceNo": "091",
    "text": "The ESP (Electronic Stability Program) system is designed for:",
    "answers": [
      {
        "key": "a",
        "text": "ensuring braking on long slopes"
      },
      {
        "key": "b",
        "text": "ensuring vehicle stability in the event of skidding"
      },
      {
        "key": "c",
        "text": "global positioning of the vehicle"
      },
      {
        "key": "d",
        "text": "preventing wheel lockup when braking"
      }
    ],
    "correct": "b"
  },
  {
    "id": 92,
    "sourceNo": "092",
    "text": "In a curve or turn, centrifugal force tends to:",
    "answers": [
      {
        "key": "a",
        "text": "align the vehicle on a circular path"
      },
      {
        "key": "b",
        "text": "increase the speed of the vehicle"
      },
      {
        "key": "c",
        "text": "maintains the vehicle's straight-line movement"
      },
      {
        "key": "d",
        "text": "move passengers to the front of the vehicle"
      }
    ],
    "correct": "c"
  },
  {
    "id": 93,
    "sourceNo": "093",
    "text": "When driving on a curve, drifting into another lane occurs when:",
    "answers": [
      {
        "key": "a",
        "text": "centrifugal force is inferior to adhesion"
      },
      {
        "key": "b",
        "text": "centrifugal force is superior to adhesion"
      },
      {
        "key": "c",
        "text": "traction force is inferior to adhesion"
      },
      {
        "key": "d",
        "text": "traction force is superior to adhesion"
      }
    ],
    "correct": "b"
  },
  {
    "id": 94,
    "sourceNo": "094",
    "text": "Does the mass of the vehicle influence the braking distance?",
    "answers": [
      {
        "key": "a",
        "text": "depends on the driver's experience"
      },
      {
        "key": "b",
        "text": "no, for drivers who drive at a speed that allows collision avoidance"
      },
      {
        "key": "c",
        "text": "the greater the mass, the greater the braking distance"
      },
      {
        "key": "d",
        "text": "the greater the mass, the shorter the braking distance because the grip and braking force increase"
      }
    ],
    "correct": "c"
  },
  {
    "id": 95,
    "sourceNo": "095",
    "text": "The vehicle's load level directly and decisively influences:",
    "answers": [
      {
        "key": "a",
        "text": "comfort and safety of travel"
      },
      {
        "key": "b",
        "text": "ease of accessing vehicle controls"
      },
      {
        "key": "c",
        "text": "the braking distance required to stop the vehicle safely"
      },
      {
        "key": "d",
        "text": "vehicle handling"
      }
    ],
    "correct": "a"
  },
  {
    "id": 96,
    "sourceNo": "096",
    "text": "Driving at the same speed, the braking distance required to stop the vehicle on a wet road, compared to that required on a dry road, increases by approximately:",
    "answers": [
      {
        "key": "a",
        "text": "10 times"
      },
      {
        "key": "b",
        "text": "2 times"
      },
      {
        "key": "c",
        "text": "4 times"
      },
      {
        "key": "d",
        "text": "6 times"
      }
    ],
    "correct": "b"
  },
  {
    "id": 97,
    "sourceNo": "097",
    "text": "On a normal road at a speed of 100 km/h the braking distance is approximately:",
    "answers": [
      {
        "key": "a",
        "text": "100 m"
      },
      {
        "key": "b",
        "text": "150 m"
      },
      {
        "key": "c",
        "text": "50 m"
      },
      {
        "key": "d",
        "text": "80 m"
      }
    ],
    "correct": "a"
  },
  {
    "id": 98,
    "sourceNo": "098",
    "text": "To control a skid, you will need to:",
    "answers": [
      {
        "key": "a",
        "text": "brake the vehicle progressively"
      },
      {
        "key": "b",
        "text": "do not accelerate, do not brake and counter-steer the wheels"
      },
      {
        "key": "c",
        "text": "do not accelerate, brake progressively and do not turn the wheels"
      },
      {
        "key": "d",
        "text": "turn the steering wheel until the steered wheels are parallel to the longitudinal axis of the vehicle"
      }
    ],
    "correct": "b"
  },
  {
    "id": 99,
    "sourceNo": "099",
    "text": "Is there any relationship between speeding and car operating costs?",
    "answers": [
      {
        "key": "a",
        "text": "not"
      },
      {
        "key": "b",
        "text": "only on highways"
      },
      {
        "key": "c",
        "text": "yes, only on roads with varied geometry"
      },
      {
        "key": "d",
        "text": "yes, the brakes, gearbox, clutch and suspension wear out prematurely, and fuel consumption increases significantly"
      }
    ],
    "correct": "d"
  },
  {
    "id": 100,
    "sourceNo": "100",
    "text": "Most traffic accidents are caused by:",
    "answers": [
      {
        "key": "a",
        "text": "adverse weather conditions"
      },
      {
        "key": "b",
        "text": "human errors"
      },
      {
        "key": "c",
        "text": "infrastructure"
      },
      {
        "key": "d",
        "text": "technical malfunctions"
      }
    ],
    "correct": "b"
  },
  {
    "id": 101,
    "sourceNo": "101",
    "text": "What are the risks associated with incorrect hand position on the steering wheel?",
    "answers": [
      {
        "key": "a",
        "text": "decrease in the steering gear ratio"
      },
      {
        "key": "b",
        "text": "destabilization of the steering wheels"
      },
      {
        "key": "c",
        "text": "poor vehicle trajectory accuracy"
      },
      {
        "key": "d",
        "text": "reducing reaction time"
      }
    ],
    "correct": "c"
  },
  {
    "id": 102,
    "sourceNo": "102",
    "text": "An incorrect driving position may lead to:",
    "answers": [
      {
        "key": "a",
        "text": "decreased resistance to fatigue"
      },
      {
        "key": "b",
        "text": "erroneous perception of distances"
      },
      {
        "key": "c",
        "text": "incorrect use of the travel lane"
      },
      {
        "key": "d",
        "text": "the lack of correlation between driving speed and visibility"
      }
    ],
    "correct": "a"
  },
  {
    "id": 103,
    "sourceNo": "103",
    "text": "An incorrect driving position may lead to:",
    "answers": [
      {
        "key": "a",
        "text": "decrease in anticipation time"
      },
      {
        "key": "b",
        "text": "decrease in reaction time"
      },
      {
        "key": "c",
        "text": "decreased concentration"
      },
      {
        "key": "d",
        "text": "decreasing the time to observe potential hazards"
      }
    ],
    "correct": "c"
  },
  {
    "id": 104,
    "sourceNo": "104",
    "text": "Lighting a cigarette while driving:",
    "answers": [
      {
        "key": "a",
        "text": "all of the above options"
      },
      {
        "key": "b",
        "text": "is an action that helps increase concentration"
      },
      {
        "key": "c",
        "text": "leads to non-reception of some information and an accident may occur"
      },
      {
        "key": "d",
        "text": "leads to the removal of the feeling of fatigue"
      }
    ],
    "correct": "c"
  },
  {
    "id": 105,
    "sourceNo": "105",
    "text": "Alcohol consumption may have the following effects:",
    "answers": [
      {
        "key": "a",
        "text": "fatigue relief"
      },
      {
        "key": "b",
        "text": "organization of intellectual processes"
      },
      {
        "key": "c",
        "text": "revitalization of the body"
      },
      {
        "key": "d",
        "text": "sedative effects or cancellation of inhibitions"
      }
    ],
    "correct": "d"
  },
  {
    "id": 106,
    "sourceNo": "106",
    "text": "While driving, fatigue may have the following effects:",
    "answers": [
      {
        "key": "a",
        "text": "alcohol consumption"
      },
      {
        "key": "b",
        "text": "decrease in reaction time"
      },
      {
        "key": "c",
        "text": "increasing anticipation capabilities"
      },
      {
        "key": "d",
        "text": "taking additional risks to shorten the journey time"
      }
    ],
    "correct": "d"
  },
  {
    "id": 107,
    "sourceNo": "107",
    "text": "Improper operation of which of the following controls can increase the vehicle's roll motion (the vehicle's tilt oscillations around its longitudinal axis)?",
    "answers": [
      {
        "key": "a",
        "text": "acceleration"
      },
      {
        "key": "b",
        "text": "clutch"
      },
      {
        "key": "c",
        "text": "gear shifter"
      },
      {
        "key": "d",
        "text": "steering wheel"
      }
    ],
    "correct": "d"
  },
  {
    "id": 108,
    "sourceNo": "108",
    "text": "Studies show that at a blood alcohol level of 0.3‰, which may be produced by consuming a glass of wine:",
    "answers": [
      {
        "key": "a",
        "text": "the risk of an accident begins"
      },
      {
        "key": "b",
        "text": "the risk of an accident is multiplied 10 times"
      },
      {
        "key": "c",
        "text": "the risk of an accident is multiplied by 35 times"
      },
      {
        "key": "d",
        "text": "there are no risks of an accident occurring"
      }
    ],
    "correct": "a"
  },
  {
    "id": 109,
    "sourceNo": "109",
    "text": "Studies show that at a blood alcohol level of 0.5‰, which may be produced by consuming two glasses of wine:",
    "answers": [
      {
        "key": "a",
        "text": "the risk of an accident begins"
      },
      {
        "key": "b",
        "text": "the risk of an accident is multiplied 10 times"
      },
      {
        "key": "c",
        "text": "the risk of an accident is multiplied by 2 times"
      },
      {
        "key": "d",
        "text": "the risk of an accident is multiplied by 35 times"
      }
    ],
    "correct": "c"
  },
  {
    "id": 110,
    "sourceNo": "110",
    "text": "Studies show that at a blood alcohol level of 0.8 ‰:",
    "answers": [
      {
        "key": "a",
        "text": "the risk of an accident begins"
      },
      {
        "key": "b",
        "text": "the risk of an accident is multiplied 10 times"
      },
      {
        "key": "c",
        "text": "the risk of an accident is multiplied by 2 times"
      },
      {
        "key": "d",
        "text": "the risk of an accident is multiplied by 35 times"
      }
    ],
    "correct": "b"
  },
  {
    "id": 111,
    "sourceNo": "111",
    "text": "Studies show that at a blood alcohol level of 1.2 ‰:",
    "answers": [
      {
        "key": "a",
        "text": "the risk of an accident begins"
      },
      {
        "key": "b",
        "text": "the risk of an accident is multiplied 10 times"
      },
      {
        "key": "c",
        "text": "the risk of an accident is multiplied by 2 times"
      },
      {
        "key": "d",
        "text": "the risk of an accident is multiplied by 35 times"
      }
    ],
    "correct": "d"
  },
  {
    "id": 112,
    "sourceNo": "112",
    "text": "Alcohol consumption may have the following effects:",
    "answers": [
      {
        "key": "a",
        "text": "decrease in reaction time"
      },
      {
        "key": "b",
        "text": "judgment becomes prompt and selective"
      },
      {
        "key": "c",
        "text": "reduction of visual field"
      },
      {
        "key": "d",
        "text": "widening the field of vision"
      }
    ],
    "correct": "c"
  },
  {
    "id": 113,
    "sourceNo": "113",
    "text": "Alcohol consumption may have the following effects:",
    "answers": [
      {
        "key": "a",
        "text": "improves gesture accuracy"
      },
      {
        "key": "b",
        "text": "increased reflexes"
      },
      {
        "key": "c",
        "text": "increases reaction time"
      },
      {
        "key": "d",
        "text": "increases thinking ability"
      }
    ],
    "correct": "c"
  },
  {
    "id": 114,
    "sourceNo": "114",
    "text": "Alcohol consumption may have the following effects:",
    "answers": [
      {
        "key": "a",
        "text": "incorrect assessment of speeds"
      },
      {
        "key": "b",
        "text": "increasing analytical capacity"
      },
      {
        "key": "c",
        "text": "increasing driver vigilance"
      },
      {
        "key": "d",
        "text": "reducing the risk of an accident"
      }
    ],
    "correct": "a"
  },
  {
    "id": 115,
    "sourceNo": "115",
    "text": "Which of the following statements is correct?",
    "answers": [
      {
        "key": "a",
        "text": "alcohol is absorbed into the body very quickly but its elimination takes a much longer time"
      },
      {
        "key": "b",
        "text": "alcohol is absorbed slowly into the body but eliminated quickly"
      },
      {
        "key": "c",
        "text": "alcohol is eliminated from the body only after 14 hours of sleep"
      },
      {
        "key": "d",
        "text": "the time it takes for alcohol to be absorbed into the body is equal to the time it takes for it to be eliminated"
      }
    ],
    "correct": "a"
  },
  {
    "id": 116,
    "sourceNo": "116",
    "text": "The order of intervention for providing first aid to a person who has suffered multiple injuries is:",
    "answers": [
      {
        "key": "a",
        "text": "alerting authorities, stopping bleeding, clearing the airway and immobilizing fractures"
      },
      {
        "key": "b",
        "text": "clearing the airway, stopping bleeding and immobilizing fractures"
      },
      {
        "key": "c",
        "text": "immobilizing fractures, clearing the airway and stopping bleeding"
      },
      {
        "key": "d",
        "text": "stopping bleeding, clearing the airway and immobilizing fractures"
      }
    ],
    "correct": "b"
  },
  {
    "id": 117,
    "sourceNo": "117",
    "text": "Before proceeding to transport victims of a traffic accident, you must make sure:",
    "answers": [
      {
        "key": "a",
        "text": "that evidence from the accident scene was preserved"
      },
      {
        "key": "b",
        "text": "that respiratory and circulatory functions are ensured"
      },
      {
        "key": "c",
        "text": "that the vehicle used for the transport ensures the necessary comfort"
      },
      {
        "key": "d",
        "text": "that the victim will be assisted during the journey by a competent person"
      }
    ],
    "correct": "b"
  },
  {
    "id": 118,
    "sourceNo": "118",
    "text": "How should a wounded person with spinal injuries be placed in a means of transport?",
    "answers": [
      {
        "key": "a",
        "text": "in a sitting position with your back and head supported"
      },
      {
        "key": "b",
        "text": "in the back seat of a car to ensure a horizontal body position"
      },
      {
        "key": "c",
        "text": "it is advisable not to move him until the ambulance arrives"
      },
      {
        "key": "d",
        "text": "lying on one side in the lateral safety position"
      }
    ],
    "correct": "c"
  },
  {
    "id": 119,
    "sourceNo": "119",
    "text": "What should you keep in mind when periodically checking and restoring tire pressures?",
    "answers": [
      {
        "key": "a",
        "text": "these operations must be carried out by specialized and authorized personnel in this regard"
      },
      {
        "key": "b",
        "text": "periodic inspection should be carried out at least once a year or after an intervention on the running system"
      },
      {
        "key": "c",
        "text": "pressure restoration operations should be carried out \"cold\""
      },
      {
        "key": "d",
        "text": "pressures should be corrected periodically depending on the wear and tear of the tires"
      }
    ],
    "correct": "c"
  },
  {
    "id": 120,
    "sourceNo": "120",
    "text": "What should you keep in mind when periodically checking and restoring tire pressures?",
    "answers": [
      {
        "key": "a",
        "text": "pressures should be established and adapted periodically, in accordance with the categories and road conditions specific to the routes that will be routinely traveled"
      },
      {
        "key": "b",
        "text": "pressures should be established and adjusted periodically, depending on the wear and tear of the tires"
      },
      {
        "key": "c",
        "text": "the pressures must comply with the recommendations specified by the manufacturer"
      },
      {
        "key": "d",
        "text": "these operations must be carried out by specialized and authorized personnel in this regard"
      }
    ],
    "correct": "c"
  },
  {
    "id": 121,
    "sourceNo": "121",
    "text": "What will be written on the note that is attached next to the tourniquet applied to a person with severe bleeding, injured in a traffic accident?",
    "answers": [
      {
        "key": "a",
        "text": "how the hemorrhage occurred and the procedure applied to stop it"
      },
      {
        "key": "b",
        "text": "the hour and minute when the tourniquet was applied"
      },
      {
        "key": "c",
        "text": "the name, surname and contact details of the person who applied the tourniquet"
      },
      {
        "key": "d",
        "text": "the victim's blood type, first and last name, and age"
      }
    ],
    "correct": "b"
  },
  {
    "id": 122,
    "sourceNo": "122",
    "text": "In which of the following situations is the exercise of the right to drive vehicles on public roads suspended:",
    "answers": [
      {
        "key": "a",
        "text": "exceeding the maximum speed allowed by law on the road section by more than 50 km/h"
      },
      {
        "key": "b",
        "text": "driving a vehicle without a tachograph chart and/or failure to comply with driving time"
      },
      {
        "key": "c",
        "text": "exceeding by more than 30 km/h the maximum speed allowed by law on the road sector on which you are driving and for the category to which the vehicle you are driving belongs"
      },
      {
        "key": "d",
        "text": "exceeding by more than 40 km/h the maximum speed allowed by law on the road sector on which you are driving and for the category to which the vehicle you are driving belongs"
      }
    ],
    "correct": "a"
  },
  {
    "id": 123,
    "sourceNo": "123",
    "text": "Factors that reduce driving ability are:",
    "answers": [
      {
        "key": "a",
        "text": "drugs, correct driving position and good eyesight"
      },
      {
        "key": "b",
        "text": "fatigue, alcohol and avoiding driving at night"
      },
      {
        "key": "c",
        "text": "fatigue, alcohol, drugs"
      },
      {
        "key": "d",
        "text": "proper rest, alcohol and medication"
      }
    ],
    "correct": "d"
  },
  {
    "id": 124,
    "sourceNo": "124",
    "text": "Which of the following factors directly and decisively influences braking distance?",
    "answers": [
      {
        "key": "a",
        "text": "engine efficiency and maximum torque developed by it"
      },
      {
        "key": "b",
        "text": "speed limiter type"
      },
      {
        "key": "c",
        "text": "tire size and profile"
      },
      {
        "key": "d",
        "text": "vehicle speed"
      }
    ],
    "correct": "d"
  },
  {
    "id": 125,
    "sourceNo": "125",
    "text": "Which of the following factors directly and decisively influences braking distance?",
    "answers": [
      {
        "key": "a",
        "text": "cardan transmission and planetary gears"
      },
      {
        "key": "b",
        "text": "compression ratio"
      },
      {
        "key": "c",
        "text": "distribution system"
      },
      {
        "key": "d",
        "text": "vehicle weight"
      }
    ],
    "correct": "d"
  },
  {
    "id": 126,
    "sourceNo": "126",
    "text": "Which of the following factors directly and decisively influences braking distance?",
    "answers": [
      {
        "key": "a",
        "text": "connecting rod-crank mechanism"
      },
      {
        "key": "b",
        "text": "steering angle"
      },
      {
        "key": "c",
        "text": "tire-road adhesion"
      },
      {
        "key": "d",
        "text": "vehicle maneuverability"
      }
    ],
    "correct": "c"
  },
  {
    "id": 127,
    "sourceNo": "127",
    "text": "Stopping distance means:",
    "answers": [
      {
        "key": "a",
        "text": "the distance traveled between the moment the obstacle is detected and the brake pedal is pressed"
      },
      {
        "key": "b",
        "text": "the distance traveled from the moment the brake pedal is pressed until stopping"
      },
      {
        "key": "c",
        "text": "the distance traveled from the moment the braking system comes into operation until it stops"
      },
      {
        "key": "d",
        "text": "the sum of the reaction distance and the braking distance"
      }
    ],
    "correct": "d"
  },
  {
    "id": 128,
    "sourceNo": "128",
    "text": "The main cause of accidents, among those listed, is:",
    "answers": [
      {
        "key": "a",
        "text": "fatigue while driving"
      },
      {
        "key": "b",
        "text": "poor condition of the public road"
      },
      {
        "key": "c",
        "text": "speeding over the permitted limits"
      },
      {
        "key": "d",
        "text": "technical failures of the lighting system"
      }
    ],
    "correct": "c"
  },
  {
    "id": 129,
    "sourceNo": "129",
    "text": "Why is it necessary to maintain a much greater distance from vehicles in front after a heavy rain:",
    "answers": [
      {
        "key": "a",
        "text": "because it increases the efficiency of the braking system in these conditions"
      },
      {
        "key": "b",
        "text": "because the stopping distance is much greater"
      },
      {
        "key": "c",
        "text": "because the temperature of the rims increases"
      },
      {
        "key": "d",
        "text": "because the tire-road adhesion decreases"
      }
    ],
    "correct": "b"
  },
  {
    "id": 130,
    "sourceNo": "130",
    "text": "To control a skid, you will need to:",
    "answers": [
      {
        "key": "a",
        "text": "brake the vehicle progressively until it stops"
      },
      {
        "key": "b",
        "text": "do not accelerate, brake or turn the wheels in the direction of rotation of the vehicle"
      },
      {
        "key": "c",
        "text": "do not accelerate, brake progressively and counter-steer the wheels in the opposite direction to the vehicle's rotation"
      },
      {
        "key": "d",
        "text": "progressively turn the steering wheel until the steering wheels become parallel to the longitudinal axis of the vehicle"
      }
    ],
    "correct": "c"
  },
  {
    "id": 131,
    "sourceNo": "131",
    "text": "How is a level crossing with a current railway without barriers or semi-barriers signalized?",
    "answers": [
      {
        "key": "a",
        "text": "with one of the signs \"Level crossing with single track\" or \"Level crossing with double track\" and the sign \"Yield the crossing\" or \"Stop\" for single track or double track, respectively"
      },
      {
        "key": "b",
        "text": "with one of the signs \"Single-track level crossing, without barriers\" or \"Double-track level crossing, without barriers\" accompanied by the \"Stop\" sign"
      },
      {
        "key": "c",
        "text": "with the \"Give way\" indicator and light and sound warning devices"
      },
      {
        "key": "d",
        "text": "with warning signs \"Railway level crossing without barriers\" and three additional panels placed at a distance of 50 meters between them"
      }
    ],
    "correct": "b"
  },
  {
    "id": 132,
    "sourceNo": "132",
    "text": "Who is responsible for preparing the vehicle for the ride?",
    "answers": [
      {
        "key": "a",
        "text": "personnel with functions that contribute to road safety"
      },
      {
        "key": "b",
        "text": "the driver"
      },
      {
        "key": "c",
        "text": "the person designated to permanently and effectively manage the transport activity the road transport activity"
      },
      {
        "key": "d",
        "text": "transport coordinator"
      }
    ],
    "correct": "b"
  },
  {
    "id": 133,
    "sourceNo": "133",
    "text": "What should you keep in mind when driving on wet, slushy roads?",
    "answers": [
      {
        "key": "a",
        "text": "periodic checking of road adhesion through controlled braking tests"
      },
      {
        "key": "b",
        "text": "periodic cleaning of headlights"
      },
      {
        "key": "c",
        "text": "periodic replacement of windshield wiper blades"
      },
      {
        "key": "d",
        "text": "periodic tire pressure restoration"
      }
    ],
    "correct": "b"
  },
  {
    "id": 134,
    "sourceNo": "134",
    "text": "What should you keep in mind when driving on wet or muddy roads?",
    "answers": [
      {
        "key": "a",
        "text": "periodic checking of the operation of traction and braking control systems (e.g. ABS, ASR, etc.)"
      },
      {
        "key": "b",
        "text": "periodic checking of road adhesion through controlled braking tests"
      },
      {
        "key": "c",
        "text": "periodic cleaning of glass surfaces"
      },
      {
        "key": "d",
        "text": "periodic tire pressure restoration"
      }
    ],
    "correct": "c"
  },
  {
    "id": 135,
    "sourceNo": "135",
    "text": "Which of the listed materials, which are part of the minimum equipment of motor vehicles, have limited and specified shelf lives, which entails the obligation of their periodic replacement or renewal?",
    "answers": [
      {
        "key": "a",
        "text": "anti-skid chains"
      },
      {
        "key": "b",
        "text": "first aid kit"
      },
      {
        "key": "c",
        "text": "reflective triangles"
      },
      {
        "key": "d",
        "text": "set of spare light bulbs"
      }
    ],
    "correct": "b"
  },
  {
    "id": 136,
    "sourceNo": "136",
    "text": "Which of the listed materials, which are part of the minimum equipment of motor vehicles, have limited and specified shelf lives, which entails the obligation of their periodic replacement or renewal?",
    "answers": [
      {
        "key": "a",
        "text": "fire extinguisher"
      },
      {
        "key": "b",
        "text": "key kit"
      },
      {
        "key": "c",
        "text": "reflective triangles"
      },
      {
        "key": "d",
        "text": "spare wheel"
      }
    ],
    "correct": "a"
  },
  {
    "id": 137,
    "sourceNo": "137",
    "text": "How to check the operation of the vehicle's service brake?",
    "answers": [
      {
        "key": "a",
        "text": "by attempts to start from a standstill with the parking brake applied"
      },
      {
        "key": "b",
        "text": "by controlling the air pressure in the braking system"
      },
      {
        "key": "c",
        "text": "exclusively by controlling the pressure resistance and the brake pedal travel"
      },
      {
        "key": "d",
        "text": "through controlled attempts to start from a standstill and stop the vehicle with the service brake"
      }
    ],
    "correct": "d"
  },
  {
    "id": 138,
    "sourceNo": "138",
    "text": "The operations to prepare the vehicle for the journey include:",
    "answers": [
      {
        "key": "a",
        "text": "catalyst replacement"
      },
      {
        "key": "b",
        "text": "checking and filling the tanks"
      },
      {
        "key": "c",
        "text": "performing engine and transmission oil changes"
      },
      {
        "key": "d",
        "text": "replacement of lubricant and fuel filters"
      }
    ],
    "correct": "b"
  },
  {
    "id": 139,
    "sourceNo": "139",
    "text": "The operations to prepare the vehicle for the journey include:",
    "answers": [
      {
        "key": "a",
        "text": "checking the condition of the tires and periodically restoring tire pressures"
      },
      {
        "key": "b",
        "text": "performing engine and transmission oil changes"
      },
      {
        "key": "c",
        "text": "replacement of lubricant and fuel filters"
      },
      {
        "key": "d",
        "text": "replacing door and hatch seals"
      }
    ],
    "correct": "a"
  },
  {
    "id": 140,
    "sourceNo": "140",
    "text": "The operations to prepare the vehicle for the journey include:",
    "answers": [
      {
        "key": "a",
        "text": "changing the coolant in the cooling system"
      },
      {
        "key": "b",
        "text": "checking and cleaning mirrors, glass surfaces and windshield wipers"
      },
      {
        "key": "c",
        "text": "performing engine and transmission oil changes"
      },
      {
        "key": "d",
        "text": "replacement of lubricant and fuel filters"
      }
    ],
    "correct": "b"
  },
  {
    "id": 141,
    "sourceNo": "141",
    "text": "What is the estimated total duration of vehicle preparation operations carried out by the driver before leaving on a journey?",
    "answers": [
      {
        "key": "a",
        "text": "about 1 day"
      },
      {
        "key": "b",
        "text": "about 1-2 hours"
      },
      {
        "key": "c",
        "text": "about 20-30 minutes"
      },
      {
        "key": "d",
        "text": "about 5 minutes"
      }
    ],
    "correct": "c"
  },
  {
    "id": 142,
    "sourceNo": "142",
    "text": "In risky situations characteristic of cornering, skidding may be avoided by:",
    "answers": [
      {
        "key": "a",
        "text": "avoiding the use of the service brake"
      },
      {
        "key": "b",
        "text": "differential lock and clutch release"
      },
      {
        "key": "c",
        "text": "energetic application of the service brake"
      },
      {
        "key": "d",
        "text": "simultaneous clutch release with heavy braking"
      }
    ],
    "correct": "a"
  },
  {
    "id": 143,
    "sourceNo": "143",
    "text": "In risky situations characteristic of cornering, skidding may be avoided by:",
    "answers": [
      {
        "key": "a",
        "text": "all-wheel drive disengagement"
      },
      {
        "key": "b",
        "text": "intermittent and pendulum steering"
      },
      {
        "key": "c",
        "text": "shifting to a higher gear in the gearbox"
      },
      {
        "key": "d",
        "text": "smooth steering wheel operation – operated continuously, without interruptions"
      }
    ],
    "correct": "d"
  },
  {
    "id": 144,
    "sourceNo": "144",
    "text": "As a driver who carries out passenger transport for rent, your main responsibility is:",
    "answers": [
      {
        "key": "a",
        "text": "applying the specific signs for the transport of passengers in taxi mode on the vehicle body"
      },
      {
        "key": "b",
        "text": "collecting the value of the transport carried out according to the indications of the taximeter device"
      },
      {
        "key": "c",
        "text": "issuing tax receipts to customers"
      },
      {
        "key": "d",
        "text": "passenger safety and comfort"
      }
    ],
    "correct": "d"
  },
  {
    "id": 145,
    "sourceNo": "145",
    "text": "The main reason why a driver carring passengers for rent must avoid sudden braking is:",
    "answers": [
      {
        "key": "a",
        "text": "passenger safety and comfort"
      },
      {
        "key": "b",
        "text": "reducing brake wear"
      },
      {
        "key": "c",
        "text": "reducing maintenance and repair costs"
      },
      {
        "key": "d",
        "text": "reducing tire wear"
      }
    ],
    "correct": "a"
  },
  {
    "id": 146,
    "sourceNo": "146",
    "text": "The speed of travel at night must be chosen so that:",
    "answers": [
      {
        "key": "a",
        "text": "allow the vehicle to stop within a maximum of 10m"
      },
      {
        "key": "b",
        "text": "the dipped headlights should not disturb those driving in the opposite direction"
      },
      {
        "key": "c",
        "text": "to allow the vehicle to stop as quickly as possible"
      },
      {
        "key": "d",
        "text": "to allow the vehicle to stop within the field of vision"
      }
    ],
    "correct": "d"
  },
  {
    "id": 147,
    "sourceNo": "147",
    "text": "How will be a driver punished if leaves the scene of an accident where a person was injured?",
    "answers": [
      {
        "key": "a",
        "text": "with a criminal fine"
      },
      {
        "key": "b",
        "text": "with imprisonment and cancellation of driving license"
      },
      {
        "key": "c",
        "text": "with imprisonment and suspension of driving license"
      },
      {
        "key": "d",
        "text": "withholding the driving license and applying penalty points"
      }
    ],
    "correct": "b"
  },
  {
    "id": 148,
    "sourceNo": "148",
    "text": "When overtaking, signaling with flashing lights is done:",
    "answers": [
      {
        "key": "a",
        "text": "from the beginning of the maneuver to its end"
      },
      {
        "key": "b",
        "text": "from the beginning of the maneuver until its end only in places with reduced visibility"
      },
      {
        "key": "c",
        "text": "only to signal the intention to overtake and the engagement in overtaking"
      },
      {
        "key": "d",
        "text": "only to signal the intention to overtake, the engagement in overtaking and the actual overtaking-overtaking"
      }
    ],
    "correct": "a"
  },
  {
    "id": 149,
    "sourceNo": "149",
    "text": "In which of the following places is the U-turn maneuver of a car prohibited?",
    "answers": [
      {
        "key": "a",
        "text": "in places where the solidity of the roads does not allow"
      },
      {
        "key": "b",
        "text": "less than 50 meters from public transport stations"
      },
      {
        "key": "c",
        "text": "on national roads"
      },
      {
        "key": "d",
        "text": "on public roads with steep slopes, signalized as such"
      }
    ],
    "correct": "a"
  },
  {
    "id": 150,
    "sourceNo": "150",
    "text": "In order to avoid glare at night, when meeting another vehicle traveling from the opposite direction with the high beam on, you should look first:",
    "answers": [
      {
        "key": "a",
        "text": "always in front"
      },
      {
        "key": "b",
        "text": "can avoid glare by following the marking that separates the directions of traffic in the diffusion area of the light beam of the headlights of the vehicle traveling in the opposite direction"
      },
      {
        "key": "c",
        "text": "no matter where, but in no case should you look at the headlights of someone driving in the opposite direction"
      },
      {
        "key": "d",
        "text": "towards landmarks on the right side of the road, and in depth, at the limit of the light beam of the headlights of the vehicle traveling in the opposite direction"
      }
    ],
    "correct": "d"
  },
  {
    "id": 151,
    "sourceNo": "151",
    "text": "What do you do at night when another vehicle is approaching from the opposite direction?",
    "answers": [
      {
        "key": "a",
        "text": "drive as far to the right of the road as possible at low speed with your parking lights on"
      },
      {
        "key": "b",
        "text": "Drive carefully, leaving your parking lights on so as not to blind the driver approaching from the opposite direction"
      },
      {
        "key": "c",
        "text": "reduce speed and turn on your low beams"
      },
      {
        "key": "d",
        "text": "turn on your parking lights and follow the lane markings"
      }
    ],
    "correct": "a"
  },
  {
    "id": 152,
    "sourceNo": "152",
    "text": "What are the factors that increase the degree of risk in urban traffic?",
    "answers": [
      {
        "key": "a",
        "text": "a very large number of taxis"
      },
      {
        "key": "b",
        "text": "high values of car and pedestrian traffic, with multiple cross-roads of their flow"
      },
      {
        "key": "c",
        "text": "the complexity and lack of knowledge of the street network"
      },
      {
        "key": "d",
        "text": "the existence of public transport"
      }
    ],
    "correct": "b"
  },
  {
    "id": 153,
    "sourceNo": "153",
    "text": "What will you do when you notice the raised arm signal made by the police officer in the middle of the cross-roads?",
    "answers": [
      {
        "key": "a",
        "text": "if you receive the signal when you are already at the cross-roads, continue your journey"
      },
      {
        "key": "b",
        "text": "obey the traffic lights at the cross-roads and ignore the policeman's signals"
      },
      {
        "key": "c",
        "text": "reduce speed and continue driving with increased caution"
      },
      {
        "key": "d",
        "text": "stop in the middle of the cross-roads in front of the police officer"
      }
    ],
    "correct": "a"
  },
  {
    "id": 154,
    "sourceNo": "154",
    "text": "When passing through undirected cross-roads within a city/village, the speed must be:",
    "answers": [
      {
        "key": "a",
        "text": "30 km/h"
      },
      {
        "key": "b",
        "text": "40 km/h"
      },
      {
        "key": "c",
        "text": "50 km/h"
      },
      {
        "key": "d",
        "text": "as there is no regulated speed limit, it must be reduced to the limit necessary to avoid any danger"
      }
    ],
    "correct": "a"
  },
  {
    "id": 155,
    "sourceNo": "155",
    "text": "If visibility is reduced below 100 m in conditions of fog, heavy rain, heavy snowfall, the traffic speed in cities/villages must be:",
    "answers": [
      {
        "key": "a",
        "text": "30 km/h"
      },
      {
        "key": "b",
        "text": "40 km/h"
      },
      {
        "key": "c",
        "text": "50 km/h"
      },
      {
        "key": "d",
        "text": "as there is no regulated speed limit, it must be reduced to the limit necessary to avoid any danger"
      }
    ],
    "correct": "a"
  },
  {
    "id": 156,
    "sourceNo": "156",
    "text": "If visibility is reduced below 100 m in conditions of fog, heavy rain, heavy snowfall, the speed of traffic outside cities/villages must be:",
    "answers": [
      {
        "key": "a",
        "text": "30 km/h"
      },
      {
        "key": "b",
        "text": "40 km/h"
      },
      {
        "key": "c",
        "text": "50 km/h"
      },
      {
        "key": "d",
        "text": "as there is no regulated speed limit, it must be reduced to the limit necessary to avoid any danger"
      }
    ],
    "correct": "c"
  },
  {
    "id": 157,
    "sourceNo": "157",
    "text": "The order of intervention for providing first aid to a person who has suffered multiple injuries is:",
    "answers": [
      {
        "key": "a",
        "text": "clearing the airway, stopping bleeding, immobilizing fractures"
      },
      {
        "key": "b",
        "text": "immobilizing fractures, clearing the airway and stopping bleeding"
      },
      {
        "key": "c",
        "text": "it doesn't matter"
      },
      {
        "key": "d",
        "text": "stopping bleeding, clearing the airway and immobilizing fractures"
      }
    ],
    "correct": "a"
  },
  {
    "id": 158,
    "sourceNo": "158",
    "text": "Entering the highway, from a side road through a road junction, is done on the lane:",
    "answers": [
      {
        "key": "a",
        "text": "acceleration, increasing speed before entering the current traffic flow"
      },
      {
        "key": "b",
        "text": "acceleration, reducing speed to avoid possible collisions"
      },
      {
        "key": "c",
        "text": "intended for emergency parking"
      },
      {
        "key": "d",
        "text": "intended for slow vehicles"
      }
    ],
    "correct": "a"
  },
  {
    "id": 159,
    "sourceNo": "159",
    "text": "The cancellation of the driving license is ordered when:",
    "answers": [
      {
        "key": "a",
        "text": "the holder was definitively sentenced to the complementary punishment of prohibition from exercising the profession or occupation of driver"
      },
      {
        "key": "b",
        "text": "the owner has changed his name"
      },
      {
        "key": "c",
        "text": "the police authorities consider it necessary"
      },
      {
        "key": "d",
        "text": "was suspended three times"
      }
    ],
    "correct": "a"
  },
  {
    "id": 160,
    "sourceNo": "160",
    "text": "What is the maximum working time per week:",
    "answers": [
      {
        "key": "a",
        "text": "36 hours"
      },
      {
        "key": "b",
        "text": "40 hours"
      },
      {
        "key": "c",
        "text": "48 hours"
      },
      {
        "key": "d",
        "text": "50 hours"
      }
    ],
    "correct": "c"
  },
  {
    "id": 161,
    "sourceNo": "161",
    "text": "What are the main sanctions?",
    "answers": [
      {
        "key": "a",
        "text": "confiscation of the vehicle"
      },
      {
        "key": "b",
        "text": "prison"
      },
      {
        "key": "c",
        "text": "the warning and the fine"
      },
      {
        "key": "d",
        "text": "vehicle immobilization"
      }
    ],
    "correct": "c"
  },
  {
    "id": 162,
    "sourceNo": "162",
    "text": "A fractured upper limb is immobilized:",
    "answers": [
      {
        "key": "a",
        "text": "in such a way that the fractured bone, the lower joint and the upper joint are included"
      },
      {
        "key": "b",
        "text": "next to the fractured bone"
      },
      {
        "key": "c",
        "text": "so as to encompass both the fractured bone and the lower joint"
      },
      {
        "key": "d",
        "text": "with the help of a tourniquet, above the fractured bone"
      }
    ],
    "correct": "a"
  },
  {
    "id": 163,
    "sourceNo": "163",
    "text": "The individual labour contract may be suspended:",
    "answers": [
      {
        "key": "a",
        "text": "not"
      },
      {
        "key": "b",
        "text": "under no circumstances"
      },
      {
        "key": "c",
        "text": "yes, but only with the consent of the parties"
      },
      {
        "key": "d",
        "text": "yes, by agreement of the parties or by unilateral act of one of the parties"
      }
    ],
    "correct": "d"
  },
  {
    "id": 164,
    "sourceNo": "164",
    "text": "If the employee commits a disciplinary offense, the employer is prohibited from applying to him/her:",
    "answers": [
      {
        "key": "a",
        "text": "demotion from office"
      },
      {
        "key": "b",
        "text": "disciplinary fines"
      },
      {
        "key": "c",
        "text": "disciplinary termination of the individual labour contract"
      },
      {
        "key": "d",
        "text": "the written warning"
      }
    ],
    "correct": "b"
  },
  {
    "id": 165,
    "sourceNo": "165",
    "text": "The individual labour contract is concluded:",
    "answers": [
      {
        "key": "a",
        "text": "based on the consent of the parties, in verbal form, in the mother tongue"
      },
      {
        "key": "b",
        "text": "based on the consent of the parties, in writing, in Romanian"
      },
      {
        "key": "c",
        "text": "based on the employer's consent in verbal form, in Romanian"
      },
      {
        "key": "d",
        "text": "with the consent of the employee only, in writing, in the native language"
      }
    ],
    "correct": "b"
  },
  {
    "id": 166,
    "sourceNo": "166",
    "text": "What is the normal period of working time per day:",
    "answers": [
      {
        "key": "a",
        "text": "10 hours"
      },
      {
        "key": "b",
        "text": "12 hours"
      },
      {
        "key": "c",
        "text": "6 hours"
      },
      {
        "key": "d",
        "text": "8 hours"
      }
    ],
    "correct": "d"
  },
  {
    "id": 167,
    "sourceNo": "167",
    "text": "Is driving at a too low speed dangerous for the traffic?",
    "answers": [
      {
        "key": "a",
        "text": "not"
      },
      {
        "key": "b",
        "text": "only on steep slopes"
      },
      {
        "key": "c",
        "text": "yes, because it forces other drivers to change lanes, or engage in risky overtaking"
      },
      {
        "key": "d",
        "text": "yes, only on a one-way road"
      }
    ],
    "correct": "c"
  },
  {
    "id": 168,
    "sourceNo": "168",
    "text": "Skill in driving vehicles on public roads is a component of:",
    "answers": [
      {
        "key": "a",
        "text": "curriculum"
      },
      {
        "key": "b",
        "text": "preventive conduct"
      },
      {
        "key": "c",
        "text": "promptness and attention"
      },
      {
        "key": "d",
        "text": "theoretical, practical and pedagogical knowledge"
      }
    ],
    "correct": "b"
  },
  {
    "id": 169,
    "sourceNo": "169",
    "text": "The duration between the moment an obstacle is observed and the moment the brake is applied, called reaction time, is usually evaluated at:",
    "answers": [
      {
        "key": "a",
        "text": "1 second"
      },
      {
        "key": "b",
        "text": "2 seconds"
      },
      {
        "key": "c",
        "text": "3 seconds"
      },
      {
        "key": "d",
        "text": "5 seconds"
      }
    ],
    "correct": "a"
  },
  {
    "id": 170,
    "sourceNo": "170",
    "text": "The expression \"foreseeable obstacle\" means:",
    "answers": [
      {
        "key": "a",
        "text": "an obstacle encountered during actual braking"
      },
      {
        "key": "b",
        "text": "an obstacle occurred during reaction time"
      },
      {
        "key": "c",
        "text": "the obstacle (sign) observed at the limit of the driver's field of vision"
      },
      {
        "key": "d",
        "text": "the obstacle (signal) that could appear beyond the end of the visibility segment, which the driver senses (a pothole after a curve, a vehicle traveling in the opposite direction after a top of a ramp, etc.)"
      }
    ],
    "correct": "d"
  },
  {
    "id": 171,
    "sourceNo": "171",
    "text": "The elements of preventive management are:",
    "answers": [
      {
        "key": "a",
        "text": "foresight, attention, motivation, theoretical and practical knowledge, skill"
      },
      {
        "key": "b",
        "text": "skill, speed, vigilance, foresight, correcting other traffic participants"
      },
      {
        "key": "c",
        "text": "theoretical and practical knowledge, vigilance, foresight, judgment, skill"
      },
      {
        "key": "d",
        "text": "vigilance, prejudice, caution, theoretical knowledge, application of regulations"
      }
    ],
    "correct": "c"
  },
  {
    "id": 172,
    "sourceNo": "172",
    "text": "What is the part of the road on your itinerary that you need to drive carefully on?",
    "answers": [
      {
        "key": "a",
        "text": "the entire itinerary"
      },
      {
        "key": "b",
        "text": "the part that crosses mountain areas, with serpentines"
      },
      {
        "key": "c",
        "text": "the section with heavy traffic"
      },
      {
        "key": "d",
        "text": "urban traffic part"
      }
    ],
    "correct": "a"
  },
  {
    "id": 173,
    "sourceNo": "173",
    "text": "As a precaution, before setting off on a journey, the driver must not neglect checks regarding:",
    "answers": [
      {
        "key": "a",
        "text": "fluid level"
      },
      {
        "key": "b",
        "text": "lights, levels, signaling, wheels and brakes"
      },
      {
        "key": "c",
        "text": "signaling and brakes"
      },
      {
        "key": "d",
        "text": "the existence of an identity card on board"
      }
    ],
    "correct": "b"
  },
  {
    "id": 174,
    "sourceNo": "174",
    "text": "Foresight, as a component of preventive management, is:",
    "answers": [
      {
        "key": "a",
        "text": "careful and diminished"
      },
      {
        "key": "b",
        "text": "concentrated and distributive"
      },
      {
        "key": "c",
        "text": "immediate and distant"
      },
      {
        "key": "d",
        "text": "stable and mobile"
      }
    ],
    "correct": "c"
  },
  {
    "id": 175,
    "sourceNo": "175",
    "text": "Judgment is one of the component elements of:",
    "answers": [
      {
        "key": "a",
        "text": "driving within the legal limits allowed"
      },
      {
        "key": "b",
        "text": "preventive driving"
      },
      {
        "key": "c",
        "text": "theoretical and practical knowledge"
      },
      {
        "key": "d",
        "text": "vigilant driving"
      }
    ],
    "correct": "b"
  },
  {
    "id": 176,
    "sourceNo": "176",
    "text": "Promptness, speed, selectivity and accuracy are important attributes of:",
    "answers": [
      {
        "key": "a",
        "text": "alertness"
      },
      {
        "key": "b",
        "text": "judgment"
      },
      {
        "key": "c",
        "text": "leadership skills"
      },
      {
        "key": "d",
        "text": "skills"
      }
    ],
    "correct": "b"
  },
  {
    "id": 177,
    "sourceNo": "177",
    "text": "Driving defensively means:",
    "answers": [
      {
        "key": "a",
        "text": "to anticipate situations that could become dangerous"
      },
      {
        "key": "b",
        "text": "to drive at a constant speed"
      },
      {
        "key": "c",
        "text": "to respect traffic rules on public roads"
      },
      {
        "key": "d",
        "text": "to warn other road users about mistakes made"
      }
    ],
    "correct": "a"
  },
  {
    "id": 178,
    "sourceNo": "178",
    "text": "Aquaplaning, the loss of contact between the tire and the road surface, occurs on a road:",
    "answers": [
      {
        "key": "a",
        "text": "with a layer of water or melted snow"
      },
      {
        "key": "b",
        "text": "with a pronounced slope"
      },
      {
        "key": "c",
        "text": "with an irregular geometry"
      },
      {
        "key": "d",
        "text": "with pronounced unevenness"
      }
    ],
    "correct": "a"
  },
  {
    "id": 179,
    "sourceNo": "179",
    "text": "The phenomenon of aquaplaning may be counteracted by:",
    "answers": [
      {
        "key": "a",
        "text": "gradual reduction of speed, without sudden use of the brake"
      },
      {
        "key": "b",
        "text": "judicious use of braking equipment"
      },
      {
        "key": "c",
        "text": "reducing tire pressure"
      },
      {
        "key": "d",
        "text": "simultaneous use of engine and service brakes"
      }
    ],
    "correct": "a"
  },
  {
    "id": 180,
    "sourceNo": "180",
    "text": "The phenomenon of aquaplaning generates the following hazards:",
    "answers": [
      {
        "key": "a",
        "text": "increasing tire-to-ground adhesion"
      },
      {
        "key": "b",
        "text": "loss of steering and braking control"
      },
      {
        "key": "c",
        "text": "reduction in engine capacity"
      },
      {
        "key": "d",
        "text": "splashing water on the windshield"
      }
    ],
    "correct": "b"
  },
  {
    "id": 181,
    "sourceNo": "181",
    "text": "Is there any relationship between vehicle speed and the driver's visual perception?",
    "answers": [
      {
        "key": "a",
        "text": "no, if the driver wears glasses"
      },
      {
        "key": "b",
        "text": "yes, both speed and perception increase proportionally with travel speed"
      },
      {
        "key": "c",
        "text": "yes, increasing speed reduces the field of visual perception"
      },
      {
        "key": "d",
        "text": "yes, only in conditions of reduced visibility"
      }
    ],
    "correct": "c"
  },
  {
    "id": 182,
    "sourceNo": "182",
    "text": "By driving too close to the vehicle in front, a driver joins the ranks of those who:",
    "answers": [
      {
        "key": "a",
        "text": "drive preventively and have an increased reaction time"
      },
      {
        "key": "b",
        "text": "I drive relaxed, without stress because I show foresight and anticipation"
      },
      {
        "key": "c",
        "text": "is based on a wealth of leadership experience"
      },
      {
        "key": "d",
        "text": "take risks and arrive at their destination very tired"
      }
    ],
    "correct": "d"
  },
  {
    "id": 183,
    "sourceNo": "183",
    "text": "Correct adjustment of the driver's seat, rearview mirrors and seat belts are:",
    "answers": [
      {
        "key": "a",
        "text": "mandatory rules, punishable by a misdemeanor"
      },
      {
        "key": "b",
        "text": "measures taken in accordance with preventive conduct"
      },
      {
        "key": "c",
        "text": "recommendations of the road authority"
      },
      {
        "key": "d",
        "text": "recommendations to be made to the public administrator"
      }
    ],
    "correct": "b"
  },
  {
    "id": 184,
    "sourceNo": "184",
    "text": "In the event of a tire explosion on the front axle of the vehicle, the driver will:",
    "answers": [
      {
        "key": "a",
        "text": "brake suddenly"
      },
      {
        "key": "b",
        "text": "let go of the steering wheel"
      },
      {
        "key": "c",
        "text": "will perform an engine brake, and after slowing down will brake gently when stopping"
      },
      {
        "key": "d",
        "text": "will turn the steering wheel in the opposite direction of the vehicle's movement"
      }
    ],
    "correct": "c"
  },
  {
    "id": 185,
    "sourceNo": "185",
    "text": "How many types of skidding are known?",
    "answers": [
      {
        "key": "a",
        "text": "when accelerating, cornering and braking"
      },
      {
        "key": "b",
        "text": "when changing gear suddenly"
      },
      {
        "key": "c",
        "text": "when climbing steep ramps"
      },
      {
        "key": "d",
        "text": "when descending steep slopes"
      }
    ],
    "correct": "a"
  },
  {
    "id": 186,
    "sourceNo": "186",
    "text": "While driving, the correct position of the hands on the steering wheel, in relation to the circular dial of a watch, is:",
    "answers": [
      {
        "key": "a",
        "text": "left hand at 10 o'clock and right hand at 4 o'clock"
      },
      {
        "key": "b",
        "text": "left hand at 12 o'clock and right hand at 3 o'clock"
      },
      {
        "key": "c",
        "text": "left hand at 12 o'clock and right hand at 6 o'clock"
      },
      {
        "key": "d",
        "text": "left hand at 9 o'clock and right hand at 3 o'clock"
      }
    ],
    "correct": "d"
  },
  {
    "id": 187,
    "sourceNo": "187",
    "text": "What do you understand by vigilance as an element of defensive behavior?",
    "answers": [
      {
        "key": "a",
        "text": "the driver's ability to adapt his driving style to the weather conditions"
      },
      {
        "key": "b",
        "text": "the driver's ability to be constantly attentive and prepared to intervene promptly to avoid an accident"
      },
      {
        "key": "c",
        "text": "the driver's ability to constantly be alert to potential hazards from customers"
      },
      {
        "key": "d",
        "text": "the driver's ability to constantly pay attention to the on-board equipment and the operation of the vehicle"
      }
    ],
    "correct": "b"
  }
];
