cat /var/log/mail.log | grep imap-login 
cat /var/log/mail.log | grep imap-login:\ Login | sed -e 's/.*Login: user=<\(.*\)>, method=.*/\1/g' | sort | uniq
