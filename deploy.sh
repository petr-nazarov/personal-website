read_var() {
    VAR=$(grep $1 $2 | xargs)
    IFS="=" read -ra VAR <<< "$VAR"
    echo ${VAR[1]}
}
APP_NAME=$(read_var APP_NAME .env)

yarn build
pm2 delete $APP_NAME
pm2 start npm --name $APP_NAME -- start
