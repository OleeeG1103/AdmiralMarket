function closePhoneNavigation() {

    document.getElementById('phoneNavWrapper').style.visibility = 'hidden';
    document.getElementById('phoneNavWrapper').style.transition = '.7s visibility';
    document.getElementById('phoneNavModal').style.transition = '.5s right';
    document.getElementById('phoneNavModal').style.right = '-100%';

};