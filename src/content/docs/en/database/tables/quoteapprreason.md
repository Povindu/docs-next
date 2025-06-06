---
uid: table-QuoteApprReason
title: QuoteApprReason table
description: Predefined reasons for quote approval
so.generated: true
keywords: database table QuoteApprReason
so.topic: reference
so.envir: onsite, online
---

# QuoteApprReason Table (525)

QuoteApprReason MDO list item table.
Predefined reasons for quote approval

## Fields

| Name | Description | Type | Null |
|------|-------------|------|:----:|
|quoteapprreason\_id|Primary key|PK| |
|name|The list item|String(239)| |
|rank|Rank order|UShort|&#x25CF;|
|tooltip|Tooltip or other description|String(254)|&#x25CF;|
|deleted|0 -&gt; record is active 1 -&gt; record is &apos;deleted&apos; and should not be shown in lists|UShort|&#x25CF;|
|registered|Registered when|UtcDateTime| |
|registered\_associate\_id|Registered by whom|FK [associate](associate.md)| |
|updated|Last updated when|UtcDateTime| |
|updated\_associate\_id|Last updated by whom|FK [associate](associate.md)| |
|updatedCount|Number of updates made to this record|UShort| |


![QuoteApprReason table relationship diagram](./media/QuoteApprReason.png)

[!include[details](./includes/quoteapprreason.md)]

## Indexes

| Fields | Types | Description |
|--------|-------|-------------|
|quoteapprreason\_id |PK |Clustered, Unique |
|name |String(239) |Unique |

## Relationships

| Table|  Description |
|------|-------------|
|[associate](associate.md)  |Employees, resources and other users - except for External persons |
|[QuoteApprReasonGroupLink](quoteapprreasongrouplink.md)  |User group link table for QuoteApprReason, for MDO item hiding |
|[QuoteApprReasonHeadingLink](quoteapprreasonheadinglink.md)  |Heading link table for QuoteApprReason, for MDO headers |


## Replication Flags

* Replicate changes DOWN from central to satellites and travellers.
* Replicate changes UP from satellites and travellers back to central.
* Copy to satellite and travel prototypes.

## Security Flags

* No access control via user's Role.

