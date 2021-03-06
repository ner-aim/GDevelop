/*
 * GDevelop Core
 * Copyright 2008-2016 Florian Rival (Florian.Rival@gmail.com). All rights
 * reserved. This project is released under the MIT License.
 */

#include "RepeatEvent.h"
#include "GDCore/Events/Serialization.h"
#include "GDCore/Serialization/SerializerElement.h"

using namespace std;

namespace gd {

RepeatEvent::RepeatEvent()
    : BaseEvent(),
      repeatNumberExpression(""),
      repeatNumberExpressionSelected(false) {}

vector<gd::InstructionsList*> RepeatEvent::GetAllConditionsVectors() {
  vector<gd::InstructionsList*> allConditions;
  allConditions.push_back(&conditions);

  return allConditions;
}

vector<gd::InstructionsList*> RepeatEvent::GetAllActionsVectors() {
  vector<gd::InstructionsList*> allActions;
  allActions.push_back(&actions);

  return allActions;
}

vector<gd::Expression*> RepeatEvent::GetAllExpressions() {
  vector<gd::Expression*> allExpressions;
  allExpressions.push_back(&repeatNumberExpression);

  return allExpressions;
}

vector<const gd::InstructionsList*> RepeatEvent::GetAllConditionsVectors()
    const {
  vector<const gd::InstructionsList*> allConditions;
  allConditions.push_back(&conditions);

  return allConditions;
}

vector<const gd::InstructionsList*> RepeatEvent::GetAllActionsVectors() const {
  vector<const gd::InstructionsList*> allActions;
  allActions.push_back(&actions);

  return allActions;
}

vector<const gd::Expression*> RepeatEvent::GetAllExpressions() const {
  vector<const gd::Expression*> allExpressions;
  allExpressions.push_back(&repeatNumberExpression);

  return allExpressions;
}

void RepeatEvent::SerializeTo(SerializerElement& element) const {
  element.AddChild("repeatExpression")
      .SetValue(repeatNumberExpression.GetPlainString());
  gd::EventsListSerialization::SerializeInstructionsTo(
      conditions, element.AddChild("conditions"));
  gd::EventsListSerialization::SerializeInstructionsTo(
      actions, element.AddChild("actions"));
  gd::EventsListSerialization::SerializeEventsTo(events,
                                                 element.AddChild("events"));
}

void RepeatEvent::UnserializeFrom(gd::Project& project,
                                  const SerializerElement& element) {
  repeatNumberExpression =
      gd::Expression(element.GetChild("repeatExpression", 0, "RepeatExpression")
                         .GetValue()
                         .GetString());
  gd::EventsListSerialization::UnserializeInstructionsFrom(
      project, conditions, element.GetChild("conditions", 0, "Conditions"));
  gd::EventsListSerialization::UnserializeInstructionsFrom(
      project, actions, element.GetChild("actions", 0, "Actions"));
  gd::EventsListSerialization::UnserializeEventsFrom(
      project, events, element.GetChild("events", 0, "Events"));
}

}  // namespace gd
