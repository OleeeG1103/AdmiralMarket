function closePhoneNavigation() {

    document.getElementById('phoneNavWrapper').style.visibility = 'hidden';
    document.getElementById('phoneNavWrapper').style.transition = '0.6s visibility';
    document.getElementById('phoneNavModal').style.transition = '.2s right';
    document.getElementById('phoneNavModal').style.right = '-100%';

};