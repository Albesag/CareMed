const form = $(`#registrar`);
const input = $(`input`);
const lista = $(`#invitedList`);

form.submit(function(event) {
  event.preventDefault();
  if (input.val() === "" || input.val().length <= 2) {
    alert(`Shkruaj me shume se 2 karaktere shkronjash`);
  } else {
    const text = input.val();
    const li = $(`<li>` + text + `</li>`);
    const label = $("<label>" + "Comfirmed" + "</label>");
    const checkbox = $(`<input type="checkbox"/>`);

    const editButton = $(`  <button type="" >  EDIT </button>`);
    const removeButton = $(`  <button type="" > REMOVE </button>`);

    input.val("");
    lista.append(li);

    li.append(label);
    label.append(checkbox);
    li.append(editButton);
    li.append(removeButton);

    li.on("change", function(event) {
      const checked = $(this).val(":checked");
      if (checked) {
        $(this).toggleClass(`responded`);
      }
    });
    removeButton.on("click", function() {
      $(this)
        .closest(`li`)
        .remove();
    });
  }
});

    editButton.on("click", function(){
      $(this)
      .closest(`li`)
      .remove();
      
    })
