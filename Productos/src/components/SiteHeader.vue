<template> 
<header> 
<img src="@/assets/logo.png" alt="Logo del sitio" class="logo" />
<h1>Mi Sitio Web</h1> 
</header> 
</template> 

<script> 
export default {
    name: 'SiteHeader'
} 
</script> 

<style scoped> 
header { 
    background: linear-gradient(135deg, #22c1c3, #fdbb2d); 
    color: white; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    padding: 1em;
}

.logo {
 height: 50px; 
 margin-right: 15px; 
}

h1 {
    font-family: 'Arial', sans-serif;
    font-size: 2em; 
    margin: 0;
}
</style> 