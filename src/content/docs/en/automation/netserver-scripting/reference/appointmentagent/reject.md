---
uid: appointmentagent-reject
title: AppointmentAgent.Reject event method
description: Scripting events called on the Reject method on the AppointmentAgent service agent.
so.generated: true
keywords: netserver scripting
so.topic: reference
so.envir: onsite
---
# AppointmentAgent.Reject

Scripting events called on the <see cref='M:IAppointmentAgent.Reject'>Reject</see> method on the <see cref='IAppointmentAgent'>IAppointmentAgent</see>  service agent.

## BeforeReject
```cs
    static void BeforeReject(
       Int32  appointmentId,
       String  rejectReason,
       RecurrenceUpdateMode  updateMode,
       ref object  eventState
      );
```
Executes before the service method is invoked.
It can store some state in the *eventState* parameter, that is passed to the **After** and **AfterAsync** methods in this service call.
Event state is not preserved between different service calls. It is set to null at the start of each service call.
## AfterReject
```cs
    static void AfterReject(
       Int32  appointmentId,
       String  rejectReason,
       RecurrenceUpdateMode  updateMode,
       ref object  eventState
      );
```
Executes after the service method has been invoked. The service waits for this method to complete before returning the result to the caller.
This service call has no return value, so there is no **returnValue** parameter
Any state you set in the **Before** method is passed in through the *eventState* parameter.
## AfterRejectAsync
```cs
    static void AfterRejectAsync(
       Int32  appointmentId,
       String  rejectReason,
       RecurrenceUpdateMode  updateMode,
       ref object  eventState
      );
```
Executes after the service method is invoked, without waiting for the call to return.
The service call is not blocked waiting for this method to complete.
Any state you set in the **Before** method is passed in through the *eventState* parameter.

