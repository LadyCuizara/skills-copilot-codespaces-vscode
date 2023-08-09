function skillMembers() {
    var members = [];
    for (var i = 0; i < 5; i++) {
        members.push({
            name: 'member' + i,
            skill: 'skill' + i
        });
    }
    return members;
}