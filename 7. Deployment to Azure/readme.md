# 7. Deployment to Azure
## Introduction
In the Azure Portal you can set up monitoring to collect the statistics and details on the application dependencies in your Azure web apps or virtual machines.

Azure supports Application Performance Monitoring (APM) by leveraging extensions. These extensions are installed into your application and collect the data and report back to the monitoring services.

Application Insights and New Relic are two of the performance monitoring extensions that are available. To use them, you install an agent at runtime. With Application Insights, there's also the option to build your code with an SDK. The SDK lets you write code to monitor the usage and performance of your app in more detail.

## Learning Outcomes
* Publish your local code using continuous deployment to a web app with a unique URL that allows you to easily share it with friends and family

## Resources

### Tools
* [Visual Studio Code](https://code.visualstudio.com) - Code Editor with Git Build In 
* [Azure Portal](portal.azure.com) - Used to create web app 

### Extra Learning Resources
* [Application Insights Animated Introduction)](https://www.youtube.com/watch?v=fX2NtGrh-Y0)
* [Application Insights for web pages](https://azure.microsoft.com/en-gb/documentation/articles/app-insights-javascript/)
* [Application Insights - introduction)](https://azure.microsoft.com/en-us/documentation/articles/app-insights-overview/)

# Publishing as a Web Application

*This tutorial assumes completion of prior modules. Before beginning ensure that you have activated your student access to azure.* 

## Lets Begin
  1. Open a web browser
  2. Go to [portal.azure.com](portal.azure.com)
  3. Log in with the credentials that you activated your dream spark account with

## Creating a new Web App
  1. Click on "New" in the top left corner of the portals home page
  2. Click on "Web + Mobile" under the Market Place heading
  3. Click on "Web App"

  ![New Web App](img/new_web_app.PNG)

  4. Fill out the information about your web app
    - Note you should get a tick next to your "App Service Name"
    - To access the website once completed you will go to yourWebAppsName.azurewebsites.net
  5. For the "Resource Group", select "Use Existing" and choose "Default" option in the dropdown menu
  6. Click on **Create** at the bottom  

  ![Fill Out](img/fill_out.PNG)

##### Azure is now deploying the Web App in the background
##### Whilst waiting open the Construct 2 application with the game you would like to deploy

## Setting up continuous deployment
  1. Head back over to your dashboard and find the tile with your App Name and click it.

  ![Dashboard Tile](img/dashboard_tile.PNG)

  2. Next find settings in the top left 
  3. Click Deployment Source in the publishing group
  4. Click configure required settings in the new menu as shown below

  ![Deployment Source](img/deployment_source.PNG)

  5. Choose GitHub in the menu that shows up  

  ![Choose GitHub](img/choose_github.PNG)

  6. Be sure to authorize GitHub to your account
  7. Choose the project you want to link to this WebApp from your GitHub Repo
  8. Choose the Branch that you want to deploy from

  ![Choose Project](img/choose_project.PNG)

  9. Go ahead and click "OK"

  ![GitHub Active](img/github_active.PNG)

## Browsing your WebApp

Now it is time to test your site.

Click **Browse** as shown in the figure below, this will open up a new tab which will allow you to share this link with friends and family and let them enjoy your Web App as well.

![Browse](img/browse.PNG)

#### Congratulation you have successfully created a Web App and published it to Azure
#### Any changes you push to the connected GitHub repo will now automatically get published to the link you have created "yourWebAppName.azurewebsites.net"
