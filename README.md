Add a client - name, email, phone

- A client can have more than one number
- A client can have more than one email

Add a bill - client, amount, description, date

- Editing a bill will show up as an edit -- i.e adding an edit to a bill maybe editing the desciption

- Bills can be marked as paid in which case the debt will be removed from the client

Add/Edit/Remove a bill

Add/Edit a client

# Models (Tables)

## Payment Model

- Bill Id (foreign key)
- Amount (Number)
- Status: Paid or Pending only (Boolean? enum?)

## Bill Model

- Project (foreign key)
- Description (Text) -- What was the order about
- Date Issued (DateTime) -- default value now()
- Date Paid (DateTime) -- will be populated once Paid is _true_
- Status (enum):
  - Pending
  - Received Partial -- if full amount is received in multiple payment, will set status to Paid
  - Paid
- Payments (Array) -- Array consisting of payments

---

## Bill item model

- ID
- Title
- Amount
- Bill ID (foreign key)

---

## Client Model

- Name (String)
- Phone (String)
- Email (String)
- Address (String)
  - Street (String)
  - City (String)
  - Building (String)
  - Floor (String)
- Banned (Boolean) -- default is 0
- Warnings (foreign key)

---

## Project Model

- ID
- Title
- Bill (foreign key)
- Canceled (default 0)
- Deleted (default 0)

---

## Warning Model

- Client (foreign key)
- Description (String)

---

## Global Setting Model (Only for **Admins**)

- Allow Registration by other people (Boolean)

---

## User Setting Model

- Client (foreign key)
- Automatic Ban (Boolean)
- Number of warnings (Number)

---

## User Model

- Name (String)
- Email (String)
- Phone (String)
- isAdmin (Boolean)
- Company Name (String)
- Banned (default 0)
- Activated (default 0)
- Deleted (default 0)

# Features

- Get all the bills of a client beginning with the last one
- Search for a client
- Ban a client -- in case they never pay (include reason)
- Edit a bill, should show up as an addition to the bill
- Filter bills by date, amount
- Login/Signup (later on)
- Mark bills as paid or leave them pending
- If _automatic ban_ is true and _number of warnings_ is exceeded mark client as **banned**
- Allow/Disallow registration based on the setting
- Only the admin (myself) is capable of changing the _allow registration_ setting, the other settings are specific to users
- Email Verification
- Password Recovery
- Export data to csv
- Allow sub-accounts to be made and they can only access read only data (some data can be hidden maybe?)
- Filter Clients by number of warnings, etc...
- Sub accounts have to be managed by the parent and they can only be activated by them
- Clients can ask for projects and bills are per project, thus making it easier to show bill info (domain name cost, server cost, etc...)
- Admin panel for the website owner (me) that can deactivate/delete/ban accounts for good
- Bill Items can be edited.
- Ability to Pay a partial amount for a project, Once payments add up to bill total the referenced bill will be set to Paid

### Could be useful

- Transactional operations on DB
- Pagination
- ID validation plugin
