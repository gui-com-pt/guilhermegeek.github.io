---
title: SMTP local mail server
layout: post_entry
excerpt: Create a local smtp mail server for testing porpuses
image: /media/python.png
categories: smtp test
---
Local mail server for tests
==========

When you're dealing with emails providers, it's a good pratice to keep the connection information in a configuration place. Allow it to set the encription, username, etc. Like this

$array = array(
'smtp.hostname' => 'localhost',
'smtp.port' => 25
/*
 * Null for no authenticated
 * Availables: ssl, tsl
 */
'smtp.security' => null,
'smtp.username' => '',
'smtp.password' => ''
);

If you're using some framework you can put the configuration in the IOC (if any), or in the default framework configuration.
For online email providers you've greate services like mail chimp or even the windows live and gmail services. 
Howerever you'll not want to keep testing the emails always with your provider, you may even get considered as spammer.

For Windows you can install smtp4dev
A greate tool i've used for a few time while i work with MS. It tracks the emails and if you've any email client it shows up there.

For linux i recommend the python mail server. It's a simple server that output the messages in console, you get the plain text of email.
For me it's usefull because i always like to inspect the entire email (headers, etc).

```
python -m smtpd -n -c DebuggingServer localhost:26
```
The default port is 25

### Getting ready for production
This is how i strucutre my projects configurations. The default configurations is in a file like `default-settings.php`. In my case the default-settings is set from a prent library. Then i've the ``local-settings.php`` wich is ignored and never sent to the git repository. This file return a array that'll replace the default settings.