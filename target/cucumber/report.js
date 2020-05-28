$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:IsItFridayYet.feature");
formatter.feature({
  "name": "Is it Friday yet?",
  "description": "  Everybody wants to know when it\u0027s Friday",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "today is \"\u003cday\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.step({
  "name": "I should be told \"\u003canswer\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "day",
        "answer"
      ]
    },
    {
      "cells": [
        "Friday",
        "TGIF"
      ]
    },
    {
      "cells": [
        "Thursday",
        "TGTF"
      ]
    },
    {
      "cells": [
        "Sunday",
        "Nope"
      ]
    },
    {
      "cells": [
        "anything else!",
        "Nope"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "today is \"Friday\"",
  "keyword": "Given "
});
formatter.match({
  "location": "up.Stepdefs.today_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "up.Stepdefs.iAskWhetherItSFridayYet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"TGIF\"",
  "keyword": "Then "
});
formatter.match({
  "location": "up.Stepdefs.iShouldBeTold(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "today is \"Thursday\"",
  "keyword": "Given "
});
formatter.match({
  "location": "up.Stepdefs.today_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "up.Stepdefs.iAskWhetherItSFridayYet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"TGTF\"",
  "keyword": "Then "
});
formatter.match({
  "location": "up.Stepdefs.iShouldBeTold(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "today is \"Sunday\"",
  "keyword": "Given "
});
formatter.match({
  "location": "up.Stepdefs.today_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "up.Stepdefs.iAskWhetherItSFridayYet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "up.Stepdefs.iShouldBeTold(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "today is \"anything else!\"",
  "keyword": "Given "
});
formatter.match({
  "location": "up.Stepdefs.today_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "up.Stepdefs.iAskWhetherItSFridayYet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "up.Stepdefs.iShouldBeTold(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});