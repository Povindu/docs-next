---
uid: quoteagent-deletequoteline
title: QuoteAgent.DeleteQuoteLine event method
description: Scripting events called on the DeleteQuoteLine method on the QuoteAgent service agent.
so.generated: true
keywords: netserver scripting
so.topic: reference
so.envir: onsite
---
# QuoteAgent.DeleteQuoteLine

Scripting events called on the <see cref='M:IQuoteAgent.DeleteQuoteLine'>DeleteQuoteLine</see> method on the <see cref='IQuoteAgent'>IQuoteAgent</see>  service agent.

## BeforeDeleteQuoteLine
```cs
    static void BeforeDeleteQuoteLine(
       Int32  quoteLineId,
       ref object  eventState
      );
```
Executes before the service method is invoked.
It can store some state in the *eventState* parameter, that is passed to the **After** and **AfterAsync** methods in this service call.
Event state is not preserved between different service calls. It is set to null at the start of each service call.
## AfterDeleteQuoteLine
```cs
    static void AfterDeleteQuoteLine(
       Int32  quoteLineId,
       ref object  eventState
      );
```
Executes after the service method has been invoked. The service waits for this method to complete before returning the result to the caller.
This service call has no return value, so there is no **returnValue** parameter
Any state you set in the **Before** method is passed in through the *eventState* parameter.
## AfterDeleteQuoteLineAsync
```cs
    static void AfterDeleteQuoteLineAsync(
       Int32  quoteLineId,
       ref object  eventState
      );
```
Executes after the service method is invoked, without waiting for the call to return.
The service call is not blocked waiting for this method to complete.
Any state you set in the **Before** method is passed in through the *eventState* parameter.

