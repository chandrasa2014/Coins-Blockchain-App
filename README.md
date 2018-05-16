# Coins-Blockchain-App


Imp: PreRequisites Steps: 
First install the Hyperledger composer. Then install the development environment.
./startFabric.sh it’s going to take a couple of minutes. So be patient.


Step 1: Create Business Network

$ yo hyperledger-composer
This will shoot out a series of questions as follows. You’ll be required to use your arrow keys to navigate through the answers.

 ![image](https://user-images.githubusercontent.com/23340083/40094508-79b02baa-5895-11e8-935b-865de2c3e2a3.png)
 
Step 2.1: Coding out Business Network (models/coins.cto)
 
![image](https://user-images.githubusercontent.com/23340083/40094753-c41ffdf4-5896-11e8-8bb7-9cabab7421a8.png)

Step 2.2: Coding out the Business Network (lib/logic.js)
In this file, we’ll add transaction logic in JavaScript.



Step 3: Generate the Business Network Archive (BNA)
Now that the business network has been defined, it must be packaged into a deployable business network archive (.bna) file.
Step 3.1: Navigate into the test-bank app in your terminal.
Step 3.2: Run the following command:
$ composer archive create -t dir -n .


This creates a .bna file in the coins-network folder.
 
![image](https://user-images.githubusercontent.com/23340083/40094759-cb765b5c-5896-11e8-9f36-2b615467e902.png)

Step 4: Deploy the Business Network Archive file on the Fabric
Step 4.1: Install composer runtime



Step 4: Deploy the Business Network Archive file on the Fabric
Step 4.1: Install composer runtime

 
Step 4.2: Deploy the business network
 
Step 4.3: Import the network administrator identity as a usable business network card
 
Step 4.4: To check that the business network has been deployed successfully,run the following command to ping the network:
 
![image](https://user-images.githubusercontent.com/23340083/40094765-d549a9c2-5896-11e8-9cf0-ffac6b974d8a.png)
![image](https://user-images.githubusercontent.com/23340083/40094768-dca2ddc4-5896-11e8-9094-488814ce19ee.png)
![image](https://user-images.githubusercontent.com/23340083/40094775-e4572dfe-5896-11e8-96ac-28925f3d440d.png)
STEP 5: Expose a RESTful API
To create a RESTful API from your command line, run the following command:
$ composer-rest-server
 


![image](https://user-images.githubusercontent.com/23340083/40094788-f3a4b4f2-5896-11e8-905b-8c8a7bbb2b9f.png)
![image](https://user-images.githubusercontent.com/23340083/40094810-096da5b4-5897-11e8-94ac-1ae370870697.png)
 
Step 6: Angular Front End
To create Angular scaffolding automatically, run the following command in the coins-network folder:
$ yo

![image](https://user-images.githubusercontent.com/23340083/40095154-703244de-5898-11e8-810d-f176b62956d8.png)

![image](https://user-images.githubusercontent.com/23340083/40095156-75cfec3e-5898-11e8-9d42-a740c3fd1603.png)



![image](https://user-images.githubusercontent.com/23340083/40095202-bbdb9b9c-5898-11e8-902b-1c435b9e41cb.png)
![image](https://user-images.githubusercontent.com/23340083/40094820-16dac182-5897-11e8-93d1-1571c48a42a7.png)



 
 

 

 
