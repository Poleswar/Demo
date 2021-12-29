public with sharing class Fetchurl {
    public Fetchurl() {
    }
  //@AuraEnabled(cacheable=true)
    //public static string fetchURL() {
    //    String currentRequestURL = URL.getCurrentRequestUrl().toExternalForm();
    //    System.debug('Current request URL: ' + currentRequestURL);
    //    return currentRequestURL;      
   }
    @AuraEnabled(cacheable=true)
    public static string fetchBaseURL(){
        try {  
            String sfdcBaseURL = URL.getSalesforceBaseUrl().toExternalForm();
            System.debug('Base URL: ' + sfdcBaseURL );
            return sfdcBaseURL;
           }
        catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
          }  
        }
}