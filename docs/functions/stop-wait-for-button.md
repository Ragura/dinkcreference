# stop_wait_for_button

<Prototype>void stop_wait_for_button(void)</Prototype>

`stop_wait_for_button()` stops any [wait_for_button()](./wait-for-button.md) commands running in any other script, and will return normal gamepad / keyboard control.

The script that originally called [wait_for_button()](./wait-for-button.md) will act as if it encountered a return statement.
