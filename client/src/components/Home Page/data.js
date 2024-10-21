const data ={
	"id": 1,
	"userID":25,
	"name":"shreyas",
	"imageURL":"https://cdn.sites.admitad.com/www.admitad.com/2023/10/google-building-logo-shutterstock_559400386.jpeg",
	"PdfS3Url":"www.google.com",
	"JSONData":{
    "farmer-details": {
        "name": "Kishore",
        "place": "Bengaluru",
        "phone_number": 3333333333
    },
    "animal-details": {
        "animal-type": "cattle",
        "body-weight": 441.0,
        "breed": {
            "breed": "Cow-Jersey-Crossbreed",
            "interpretation": "No specific interpretation",
            "recommendation": "No specific recommendation"
        },
        "breed-grade": {
            "breed-grade": "Breed-Grade-A3",
            "interpretation": "No specific interpretation",
            "recommendation": "No specific recommendation"
        }
    },
    "animal-economic-status": {
        "bcs": {
            "interpretation": "No specific interpretation",
            "recommendation": "No specific recommendation",
            "value": 2.75
        },
        "breeding-capacity": "Fair",
        "buying-recommendation": "Physical Check required",
        "lactation-yield": "3450-3950",
        "market-value": "72000-78000",
        "milk yield": "16-20",
        "production-capacity": "17-21"
    },
    "diet": {
        "gd_fodder_based_diet": {
            "cmg-18": 0.0,
            "cmg-22": 6.24,
            "cotton-seed-cake": 0.0,
            "dairy-fortune": 0.42,
            "green-fodder": 17.64,
            "green-maize-fodder": 7.35,
            "grnd-nut-cake": 0.65,
            "maize-cracked": 0.66,
            "maize-silage": 0.0,
            "rs-ws-ps": 2.88
        },
        "ms_based_diet": {
            "cmg-18": 0.0,
            "cmg-22": 6.61,
            "cotton-seed-cake": 0.0,
            "dairy-fortune": 0.42,
            "green-fodder": 18.37,
            "green-maize-fodder": 0.0,
            "grnd-nut-cake": 0.65,
            "maize-cracked": 0.0,
            "maize-silage": 9.92,
            "rs-ws-ps": 1.58
        }
    },
    "general-health-condition": {
        "animal-alertness": "Active",
        "cleft-status": {
            "interpretation": "No specific interpretation",
            "recommendation": "No specific recommendation",
            "value": "Null"
        },
        "horn-status": {
            "interpretation": "No specific interpretation",
            "recommendation": "No specific recommendation",
            "value": "Null"
        },
        "rumination-status": {
            "interpretation": "60 Rumination/minute",
            "recommendation": "Animal Rumen Microbial Health is Good, kindly follow the better feeding recommendations.",
            "value": "Good"
        },
        "skin-coat": {
            "interpretation": "Your animal is regularly receiving multi minerals and vitamins from feed and grazing",
            "recommendation": "Continue current feeding/grazing practices to ensure adequate minerals and vitamins OR For better health and milk production, Feed Dairy Fortune 300 Grams Daily in concentrate feed /TMR, a unique Dairy Cow feeding solution",
            "value": "Skin-Coat-Shiny"
        },
        "teat-score": {
            "interpretation": "Teat Size is Intermediate in length & Still have Symmetry",
            "recommendation": "Indicates they are Good Milkers, Use Teat Dips to prevent mastitis",
            "value": "Teat-Score-5"
        },
        "udder-type": {
            "interpretation": "Udder attached in a compact manner to the Ventral region above the Hock joint indicates Good Type of Udder & Less prone for Mastitis and Injury",
            "recommendation": "Good type of udder.To prevent Mastitis Use Teat Dips after Morning & Evening Milking.  Sol. V-Dip 500ml-1 .Regulary Check Subclinical Mastitis by CMT test. Sol. V-CMT 500ml-1",
            "value": "Udder-Compact"
        },
        "worm-load": {
            "interpretation": "Indicates possible infestation of animal by Round worm/Tape worm/Flat worm during grazing or by Vector contaminated fodder. You may be doing irregular Deworming, incorrect Deworming medication, or underdosing Deworming medicine.",
            "recommendation": "Your animal may need the Right deworming medicine in required dose. Contact a local Veterinary Doctor or Silo Fortune Veterinary Doctor for the Selecting better Deworming Medicine.",
            "value": "Worm-Load-Moderate"
        },
        "wound-status": {
            "interpretation": "No specific interpretation",
            "recommendation": "No specific recommendation",
            "value": "Null"
        }
    },
    "module-fsr-match": true,
    "system-of-disorder": {
        "digestive-system": {
            "diarrhea": {
                "interpretation": "Digestive system of Animal is Looking  good, Follow the Good Feeding practices.",
                "recommendation": "Provide Free Acess to Good quality water & Good Quality Feed & Fodder free from Fungus for better digestion.",
                "value": false
            }
        },
        "metabolic-system": {
            "milk-fever": {
                "interpretation": "Metabolic Disorders Occure during the crucial situations like During Dry period or immidiately after calving or During Peak Lactation. This may lead into Serious Economic Losses to the farmer.",
                "recommendation": "To avoid this type of Situations, During the Dry Period, 15 days before calving Provide DCAD Powder 50-100Grams daily(Oral feeding) or Pow. Balanion 50-100Grams Oraly. From the Day of Calving Start feeding Mineral Mixture to the Cows as per recomendations.                                                                                ",
                "value": false
            }
        },
        "skin-Sensory-organs": {
            "flea-bite": {
                "interpretation": "Flies or Tick may causes Economic losses to Farmers. Regularly observe & Control the breeding spots.",
                "recommendation": "Regularly Wash the Shed & Animal with KMno4 Solution.  Control the Fly breeding spots in & Around the Shed.   ",
                "value": false
            }
        },
        "udder-mammary-system": {
            "mastitis": {
                "interpretation": "Regularly screen your Cows milk by CMT test for detection of Subclinical mastitis & Follow Clean Milk Production Protocols to avoid Udder infections.",
                "recommendation": " \"ಅಗೋಚರ  or ಗುಪ್ತ ಕೆಚ್ಚಲುಬಾವು ವನ್ನು ಪತ್ತೆಹಚ್ಚಲು ತಿಂಗಳಿಗೊಮ್ಮೆ ಹಾಲಿನ CMT ಪರೀಕ್ಷೆ ಮಾಡಿ, POSSITIVE  ಸ್ಕೋರ್  ಬಂದ ಹಸುಗಳನ್ನು ಗುಣಪಡಿಸಿ ಹೆಚ್ಚಿನ ಹಾಲಿನ ಇಳುವರಿ ಪಡೆಯಲು  ಸೈಲೋ ಫಾರ್ಚೂನ್ ಪಶುವೈದ್ಯರು ಅಥವಾ ಸ್ಥಳೀಯ ಪಶುವೈದ್ಯರಿಂದ ಸಲಹೆ ಪಡೆಯಿರಿ.",
                "value": false
            }
        },
        "viral-diseases": {
            "fmd": {
                "interpretation": "No specific interpretation",
                "recommendation": "No specific recommendation",
                "value": false
            },
            "healthy": {
                "interpretation": "Good, You are protected your Animal by Vaccination. Most of the Viral Diseases are Contagious & Acute. Out break May Cause Tremendous Economic Losses & sometimes Deaths. Only way to Prevent this Diseases by Periodic Vaccination Program, So Protect your Animals by Vaccinations.",
                "recommendation": "Periodic Vaccination Program as Follows : FMD Vaccine  2ml   I/M    Every 6 months Once ,LSD Vaccine   2ml    S/C  Annualy once  OR As Recommended by Veterinary Doctors",
                "value": false
            },
            "lsd": {
                "interpretation": " As per the Visible symptoms this Animal may be Suffereing from LSD disease. But for the Confirmation Physical & Lab Examination required. So, take advice from Local Veterinary Doctor & Roll out the Differential Diagnosis like Sting/Flea Bite allergy/Dermatophilosis/Demodecosis etc.. The Major LSD Symptoms are High Fever, Enlarged Lymphnodes, Lumps/Nodules formation on the Animal body, Swelling of Limbs & Brisket area, In advance stages Nodules may rupture to become wound.",
                "recommendation": "Its an Emergency Situation, Consult Local Veterinary Doctors for immidiate medications. As a prevention, For Healthy Cows provide LSD vaccination annualy once to avoid Economic Loses. ",
                "value": true
            }
        }
    }
}
	
}

export default data;
