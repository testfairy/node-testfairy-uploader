NPM TestFairy Uploader
======================
[![Build Status](https://travis-ci.org/testfairy/node-testfairy-uploader.png)](https://travis-ci.org/testfairy/node-testfairy-uploader)

A command line utility to upload Android and iOS builds to [TestFairy](https://www.testfairy.com). The utility allows you to define the metrics and options for any given session of your artifact.

Install
-------
```
npm install -g testfairy-uploader
```

Quick Start
-----------
To upload iOS builds
```
testfairy-uploader 
    --api-key <API KEY from https://app.testfairy.com/settings> 
    </path/to/ipa>
```

To upload Android builds
```
testfairy-uploader 
    --api-key <API KEY from https://app.testfairy.com/settings> 
    --keystore=KEYSTORE_PATH
    --storepass=KEYSTORE_PASSWORD
    --alias=KEYSTORE_ALIAS
    </path/to/apk>
```

License
=======

    Copyright 2015 TestFairy.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
