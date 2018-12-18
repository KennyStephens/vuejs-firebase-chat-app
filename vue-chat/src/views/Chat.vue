<template>
    <div class="container chat">
        <h2 class="text-primary text-center">Real-Time Chat</h2>
        <h5 class="text-secondary text-center">Powered by Vue.js and Firebase</h5>
        <div class="card">
            <div class="card-body">
                <p class="text-secondary nomessages" v-if="messages.length == 0">
                    [No Messages Yet!]
                </p>
            </div>
        </div>
    </div>
</template>
