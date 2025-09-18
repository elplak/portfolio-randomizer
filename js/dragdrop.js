export function enableSectionDragDrop() {
    const container = document.getElementById("app");
    let dragItem = null;

    container.addEventListener("dragstart", e => {
        if (e.target.classList.contains("draggable-section")) {
            dragItem = e.target;
            e.target.classList.add("dragging");

            e.dataTransfer.effectAllowed = "move";
        }
    });

    container.addEventListener("dragend", e => {
        if (dragItem) {
            dragItem.classList.remove("dragging");
            dragItem = null;
        }
    });

    container.addEventListener("dragover", e => {
        e.preventDefault();

        e.dataTransfer.dropEffect = "move";

        const afterElement = getDragAfterElement(container, e.clientY);
        const current = document.querySelector(".dragging");
        if (afterElement == null) {
            container.appendChild(current);
        } else {
            container.insertBefore(current, afterElement);
        }
    });

    function getDragAfterElement(container, y) {
        const elements = [...container.querySelectorAll(".draggable-section:not(.dragging)")];
        return elements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
}