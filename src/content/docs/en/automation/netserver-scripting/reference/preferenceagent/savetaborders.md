---
uid: preferenceagent-savetaborders
title: PreferenceAgent.SaveTabOrders event method
description: Scripting events called on the SaveTabOrders method on the PreferenceAgent service agent.
so.generated: true
keywords: netserver scripting
so.topic: reference
so.envir: onsite
---
# PreferenceAgent.SaveTabOrders

Scripting events called on the <see cref='M:IPreferenceAgent.SaveTabOrders'>SaveTabOrders</see> method on the <see cref='IPreferenceAgent'>IPreferenceAgent</see>  service agent.

## BeforeSaveTabOrders
```cs
    static void BeforeSaveTabOrders(
       TabOrder[]  tabOrders,
       ref object  eventState
      );
```
Executes before the service method is invoked.
It can store some state in the *eventState* parameter, that is passed to the **After** and **AfterAsync** methods in this service call.
Event state is not preserved between different service calls. It is set to null at the start of each service call.
## AfterSaveTabOrders
```cs
    static void AfterSaveTabOrders(
       TabOrder[]  tabOrders,
       ref object  eventState
      );
```
Executes after the service method has been invoked. The service waits for this method to complete before returning the result to the caller.
This service call has no return value, so there is no **returnValue** parameter
Any state you set in the **Before** method is passed in through the *eventState* parameter.
## AfterSaveTabOrdersAsync
```cs
    static void AfterSaveTabOrdersAsync(
       TabOrder[]  tabOrders,
       ref object  eventState
      );
```
Executes after the service method is invoked, without waiting for the call to return.
The service call is not blocked waiting for this method to complete.
Any state you set in the **Before** method is passed in through the *eventState* parameter.

