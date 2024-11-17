function showTab(value) {
    $('.d-block').first().addClass('d-none').removeClass('d-block');
    $(`#tab-content-${value}`).removeClass('d-none').addClass('d-block');
    $('.active').first().addClass('text-success').removeClass('active');
    $(`#tab-${value} a`).addClass('active').removeClass('text-success');

    const navbarCollapse = new bootstrap.Collapse($('#navbarNav'), {
        toggle: false
    });
    navbarCollapse.hide();
}

// $('#signup-nav-btn').on('click', () => {
//     $('.d-block').first().addClass('d-none').removeClass('d-block');
//     $('#signup-content').addClass('d-block').removeClass('d-none');
//     $('#burger-btn').addClass('d-none');
//     $('#nav-bar').addClass('d-none');
// });

// $('#logout-nav-btn').on('click', () => {
//     $('.d-block').first().addClass('d-none').removeClass('d-block');
//     $('#login-content').addClass('d-block').removeClass('d-none');
//     $('#burger-btn').addClass('d-none');
//     $('#nav-bar').addClass('d-none');
// });

$(document).keydown((event) => {
    if (event.key === 'Tab') {
        event.preventDefault(); // Prevent the default tab behavior
    }
});