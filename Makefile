NAME := $(shell basename $$PWD | sed -e s/[\\.-]//g)

shell: ## start docker shell
	docker exec -it ${NAME}_web_1 /bin/bash
