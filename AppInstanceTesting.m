
//ApInstance
//AppInstance.m
#import "AppInstance.h"
#import "DeviceRegistration.h"
#import "DeviceMapFlagDetails.h"
#import "DeviceReMapping.h"
#import "CSRFTokenGeneration.h"
#import "BreakDownCREATE.h"
#import "OneTimePassword.h"
#import "EmailPhoneUpdate.h"
#import "CustomerMiscellaneous.h"
#import "FormDefinitions.h"
#import "FormDefinitionName.h"
#import "FormsCollection.h"
#import "GetForm.h"
#import "FormsPost.h"
#import "formUpdate.h"
#import "EligibleCustomer.h"
#import "GetCustomerWithID.h"
#import "GetCustomerWithQuery.h"
#import "EligibleCustomerEmail.h"
#import "CustomerCreate.h"
#import "CustomerUpdatePasswordUPDATE.h"
#import "LogOutCREATE.h"
#import "ValidateTokenCREATE.h"
#import "avgresponsetime.h"
#import "avgmessagesize.h"
#import "cachehits.h"
#import "cachemisses.h"
#import "avgrequestlatency.h"
#import "avgresponselatency.h"
#import "nummessages.h"
#import "numerrors.h"
#import "Login.h"
#import "SAMLREAD.h"
#import "GetMessagesREAD.h"
#import "CreateMessageCREATE.h"
#import "GetMessageWithIDREAD.h"
@interface AppInstance ()
{
NSDictionary *opDictionary;
}
-(void)getInstance;

@end

@implementation AppInstance

- (id)init
{
self = [super init];
if (self) {
[self getInstance];
}
return self;
}

+(id)sharedInstance
{
static AppInstance *staticInstance;
static dispatch_once_t onceToken;
dispatch_once(&onceToken, ^{
staticInstance = [[AppInstance alloc] init];
});
return staticInstance;
}

-(void)getInstance
{
opDictionary = @{
    @"DeviceRegistration":[[DeviceRegistration alloc]init],
    @"DeviceMapFlagDetails":[[DeviceMapFlagDetails alloc]init],
    @"DeviceReMapping":[[DeviceReMapping alloc]init],
    @"CSRFTokenGeneration":[[CSRFTokenGeneration alloc]init],
    @"BreakDownCREATE":[[BreakDownCREATE alloc]init],
    @"OneTimePassword":[[OneTimePassword alloc]init],
    @"EmailPhoneUpdate":[[EmailPhoneUpdate alloc]init],
    @"CustomerMiscellaneous":[[CustomerMiscellaneous alloc]init],
    @"FormDefinitions":[[FormDefinitions alloc]init],
    @"FormDefinitionName":[[FormDefinitionName alloc]init],
    @"FormsCollection":[[FormsCollection alloc]init],
    @"GetForm":[[GetForm alloc]init],
    @"FormsPost":[[FormsPost alloc]init],
    @"formUpdate":[[formUpdate alloc]init],
    @"EligibleCustomer":[[EligibleCustomer alloc]init],
    @"GetCustomerWithID":[[GetCustomerWithID alloc]init],
    @"GetCustomerWithQuery":[[GetCustomerWithQuery alloc]init],
    @"EligibleCustomerEmail":[[EligibleCustomerEmail alloc]init],
    @"CustomerCreate":[[CustomerCreate alloc]init],
    @"CustomerUpdatePasswordUPDATE":[[CustomerUpdatePasswordUPDATE alloc]init],
    @"LogOutCREATE":[[LogOutCREATE alloc]init],
    @"ValidateTokenCREATE":[[ValidateTokenCREATE alloc]init],
    @"avgresponsetime":[[avgresponsetime alloc]init],
    @"avgmessagesize":[[avgmessagesize alloc]init],
    @"cachehits":[[cachehits alloc]init],
    @"cachemisses":[[cachemisses alloc]init],
    @"avgrequestlatency":[[avgrequestlatency alloc]init],
    @"avgresponselatency":[[avgresponselatency alloc]init],
    @"nummessages":[[nummessages alloc]init],
    @"numerrors":[[numerrors alloc]init],
    @"Login":[[Login alloc]init],
    @"SAMLREAD":[[SAMLREAD alloc]init],
    @"GetMessagesREAD":[[GetMessagesREAD alloc]init],
    @"CreateMessageCREATE":[[CreateMessageCREATE alloc]init],
    @"GetMessageWithIDREAD":[[GetMessageWithIDREAD alloc]init],
    };
    }
    
-(id)getDeviceRegistrationResource
{
return [opDictionary objectForKey:@"DeviceRegistration"];
}
    
-(id)getDeviceMapFlagDetailsResource
{
return [opDictionary objectForKey:@"DeviceMapFlagDetails"];
}
    
-(id)getDeviceReMappingResource
{
return [opDictionary objectForKey:@"DeviceReMapping"];
}
    
-(id)getCSRFTokenGenerationResource
{
return [opDictionary objectForKey:@"CSRFTokenGeneration"];
}
    
-(id)getBreakDownCREATEResource
{
return [opDictionary objectForKey:@"BreakDownCREATE"];
}
    
-(id)getOneTimePasswordResource
{
return [opDictionary objectForKey:@"OneTimePassword"];
}
    
-(id)getEmailPhoneUpdateResource
{
return [opDictionary objectForKey:@"EmailPhoneUpdate"];
}
    
-(id)getCustomerMiscellaneousResource
{
return [opDictionary objectForKey:@"CustomerMiscellaneous"];
}
    
-(id)getFormDefinitionsResource
{
return [opDictionary objectForKey:@"FormDefinitions"];
}
    
-(id)getFormDefinitionNameResource
{
return [opDictionary objectForKey:@"FormDefinitionName"];
}
    
-(id)getFormsCollectionResource
{
return [opDictionary objectForKey:@"FormsCollection"];
}
    
-(id)getGetFormResource
{
return [opDictionary objectForKey:@"GetForm"];
}
    
-(id)getFormsPostResource
{
return [opDictionary objectForKey:@"FormsPost"];
}
    
-(id)getformUpdateResource
{
return [opDictionary objectForKey:@"formUpdate"];
}
    
-(id)getEligibleCustomerResource
{
return [opDictionary objectForKey:@"EligibleCustomer"];
}
    
-(id)getGetCustomerWithIDResource
{
return [opDictionary objectForKey:@"GetCustomerWithID"];
}
    
-(id)getGetCustomerWithQueryResource
{
return [opDictionary objectForKey:@"GetCustomerWithQuery"];
}
    
-(id)getEligibleCustomerEmailResource
{
return [opDictionary objectForKey:@"EligibleCustomerEmail"];
}
    
-(id)getCustomerCreateResource
{
return [opDictionary objectForKey:@"CustomerCreate"];
}
    
-(id)getCustomerUpdatePasswordUPDATEResource
{
return [opDictionary objectForKey:@"CustomerUpdatePasswordUPDATE"];
}
    
-(id)getLogOutCREATEResource
{
return [opDictionary objectForKey:@"LogOutCREATE"];
}
    
-(id)getValidateTokenCREATEResource
{
return [opDictionary objectForKey:@"ValidateTokenCREATE"];
}
    
-(id)getavgresponsetimeResource
{
return [opDictionary objectForKey:@"avgresponsetime"];
}
    
-(id)getavgmessagesizeResource
{
return [opDictionary objectForKey:@"avgmessagesize"];
}
    
-(id)getcachehitsResource
{
return [opDictionary objectForKey:@"cachehits"];
}
    
-(id)getcachemissesResource
{
return [opDictionary objectForKey:@"cachemisses"];
}
    
-(id)getavgrequestlatencyResource
{
return [opDictionary objectForKey:@"avgrequestlatency"];
}
    
-(id)getavgresponselatencyResource
{
return [opDictionary objectForKey:@"avgresponselatency"];
}
    
-(id)getnummessagesResource
{
return [opDictionary objectForKey:@"nummessages"];
}
    
-(id)getnumerrorsResource
{
return [opDictionary objectForKey:@"numerrors"];
}
    
-(id)getLoginResource
{
return [opDictionary objectForKey:@"Login"];
}
    
-(id)getSAMLREADResource
{
return [opDictionary objectForKey:@"SAMLREAD"];
}
    
-(id)getGetMessagesREADResource
{
return [opDictionary objectForKey:@"GetMessagesREAD"];
}
    
-(id)getCreateMessageCREATEResource
{
return [opDictionary objectForKey:@"CreateMessageCREATE"];
}
    
-(id)getGetMessageWithIDREADResource
{
return [opDictionary objectForKey:@"GetMessageWithIDREAD"];
}
    
@end
    