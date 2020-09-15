const logger=createLogger({
level:'info',
transports:[new transports.console({
    level:'debug',
    colorize:true,
    template:createTemplate(
        format.level(),
        format.text(' :gift'),
        format.newLine(),
        fromat.message(),
        format.newLine(),
        format.text('logged from'),
        format.location(),
        format.text(' :tada:'),

    ),
}),
new transports.file({
    level:'info',
    path:path.join(__dirname,'../important.log'),
    template:createTemplate(
        format.level(),
        format.text(' :gift'),
        format.newLine(),
        fromat.message(),
        format.newLine(),
        format.text('logged from'),
        format.location(),
        format.text(' :tada:'),
  
    ),

}),
new transports.file({
    level:'info',
    path:path.join(__dirname,'../important.log'),
    template:createTemplate(
        format.level(),
        format.text(' :gift'),
        format.newLine(),
        fromat.message(),
        format.newLine(),
        format.text('logged from'),
        format.location(),
        format.text(' :tada:'),
    ),
}),
]
})