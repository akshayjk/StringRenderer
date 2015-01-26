var xml2js_result={
  "renderFile": {
    "div": [
      "#import \"AppInstance.h\"",
      {
        "_": "#import \"{{ORCHESTRATION_NAME}}.h",
        "$": {
          "repeat": "DataModel.META_TABLE"
        }
      },
      "\n        @interface AppInstance ()\n        {\n        NSDictionary *opDictionary;\n        }\n        -(void)getInstance;\n\n        @end\n\n        @implementation AppInstance\n\n        - (id)init\n        {\n        self = [super init];\n        if (self) {\n        [self getInstance];\n        }\n        return self;\n        }\n\n        +(id)sharedInstance\n        {\n        static AppInstance *staticInstance;\n        static dispatch_once_t onceToken;\n        dispatch_once(&onceToken, ^{\n        staticInstance = [[AppInstance alloc] init];\n        });\n        return staticInstance;\n        }\n\n        -(void)getInstance\n        {\n        opDictionary = @{\n    ",
      {
        "_": "@\"{{ORCHESTRATION_NAME}}\":[[{{ORCHESTRATION_NAME}} alloc]init],",
        "$": {
          "repeat": "DataModel.META_TABLE"
        }
      },
      "};",
      {
        "_": "\n        -(id)get{{ORCHESTRATION_NAME}}\n        {\n        return [opDictionary objectForKey:@\"{{ORCHESTRATION_NAME}}\"];\n        }\n    ",
        "$": {
          "repeat": "DataModel.META_TABLE"
        }
      }
    ]
  }
}