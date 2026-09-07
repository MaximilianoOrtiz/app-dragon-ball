const Toast = {

    container: null,
    timeoutId: null,

    show(message, type = "success") {

        this.ensureContainer();
        this.removeCurrent();

        const toast =
            document.createElement("div");

        toast.className =
            `toast toast--${type}`;

        toast.setAttribute(
            "role",
            "status"
        );

        toast.innerHTML = `
            <span class="toast__message">
                ${message}
            </span>
        `;

        this.container
            .appendChild(toast);

        this.timeoutId =
            setTimeout(
                () => this.removeCurrent(),
                4000
            );
    },

    ensureContainer() {

        if (this.container) return;

        this.container =
            document.createElement("div");

        this.container.className =
            "toast-container";

        this.container.setAttribute(
            "aria-live",
            "polite"
        );

        document.body
            .appendChild(this.container);
    },

    removeCurrent() {

        if (this.timeoutId) {
            clearTimeout(
                this.timeoutId
            );
            this.timeoutId = null;
        }

        if (
            this.container &&
            this.container.firstChild
        ) {
            this.container.firstChild
                .remove();
        }
    }
};