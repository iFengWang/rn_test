//
//  TestModule.m
//  rn_test
//
//  Created by Frank.w on 2017/12/1.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "TestModule.h"
#import "twoModule.h"

@implementation TestModule
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(showAlert : (NSString *)str) {
  
  dispatch_async(dispatch_get_main_queue(), ^{
    UIAlertView * alert = [[UIAlertView alloc] initWithTitle:@"js区动ios" message:str delegate:nil cancelButtonTitle:@"ok" otherButtonTitles: nil];
    [alert show];
  });
}

RCT_REMAP_METHOD(callfun2,
                 param:(NSString *)param
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject) {
  
  NSMutableDictionary *dict = [NSMutableDictionary dictionaryWithObject:@"峰" forKey:@"name"];
  [dict setObject:param forKey:@"age"];
//  if (resolve) {
//    resolve(dict);
//  }
  
  twoModule * two = [[twoModule alloc] init];
  [two ddddd];
}
@end
