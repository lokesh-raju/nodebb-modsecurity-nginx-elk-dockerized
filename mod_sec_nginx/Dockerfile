# Selecting owasp offical build for modsecurity where nginx is used
FROM owasp/modsecurity:3.0-nginx

# Adding arguments which are usefull for further steps
ARG COMMIT=v3.2/dev
ARG BRANCH=v3.2/dev
ARG REPO=SpiderLabs/owasp-modsecurity-crs

# In this run command we updating and installing packages in the base image
# Next step is cloning owasp-modsecurity core ruleset which contains rules to combat top OWASP 10 vulnerabilities 
# Once clone is complete the config file and rule file of owasp-modsecurity core ruleset are included to the configuration of modsecurity module predefined in base image
# After completing configuration setting up configuration of SecRuleEngine is to On, this will block all the requests with anomalies
# Configuration of SecAuditLogFormat is set to json to output logs in json format
RUN apt-get update && \
    apt-get -y install python git ca-certificates iproute2 && \
    mkdir /opt/owasp-modsecurity-crs-3.2 && \
    cd /opt/owasp-modsecurity-crs-3.2 && \
    git init && \
    git remote add origin https://github.com/${REPO} && \
    git fetch --depth 1 origin ${BRANCH} && \
    git checkout ${COMMIT} && \
    mv crs-setup.conf.example crs-setup.conf && \
    ln -sv /opt/owasp-modsecurity-crs-3.2 /etc/modsecurity.d/owasp-crs && \
    printf "include /etc/modsecurity.d/owasp-crs/crs-setup.conf\ninclude /etc/modsecurity.d/owasp-crs/rules/*.conf" >> /etc/modsecurity.d/include.conf && \
    sed -i -e 's/SecRuleEngine DetectionOnly/SecRuleEngine On/g' /etc/modsecurity.d/modsecurity.conf && \
    sed -i -e 's#SecAuditLog /var/log/modsec_audit.log#SecAuditLog /var/log/modsec/modsec_audit.log#' /etc/modsecurity.d/modsecurity.conf && \
    printf "SecAuditLogFormat JSON" >> /etc/modsecurity.d/modsecurity.conf

RUN mkdir /var/log/modsec

COPY ./conf/default.conf /etc/nginx/conf.d/default.conf

COPY ./conf/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
